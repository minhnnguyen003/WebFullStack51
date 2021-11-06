const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CarModel = require('./models/car_models');

//connect to mongodb
const db = 'mongodb://localhost/car-example';
const port = 8080;

mongoose.connect(db);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API working');
});

app.get('/cars', (req, res) => {
    console.log(req.query.name);
    CarModel.find({}).exec((err, cars) => {
        if(err) res.send('Cannot get car data');
        else {
            console.log('Get car data successfully');
            res.json(cars);
        }
    })
});

app.get('/car', async (req, res) => {
    CarModel.find({name: req.query.name}, (err, cars) => {
        if(err) res.send(err);
        res.json(cars);
    })
});

app.get('/car/:id', (req, res) => {
    CarModel.findOne({
        _id : req.params.id,
    }).exec((err, car) => {
        if(err) res.send('Error');
        else {
            console.log('Get car by ID');
            res.json(car);
        }
    });
});

app.post('/car', (req, res) => {
    var car = new CarModel();
    car.name = req.body.name;
    car.manufacture = req.body.manufacture;
    car.price = req.body.price;

    car.save((err, car) => {
        if(err) res.send('Error saving data');
        else
        {
            console.log('Save data successfully', car);
            res.send(car);
        }
    });
});

app.put('/car/:id', (req, res) => {
    CarModel.findOneAndUpdate({
        _id: req.params.id,
    }, 
        {$set: {name: req.body.name, manufacture : req.body.manufacture, price: req.body.price}}, 
        { upsert: true}, 
        (err, car) => {
        if(err) res.send('Cannot update');
        else res.sendStatus(200);
    })
})

app.delete('/car/:id', (req, res) => {
    CarModel.findOneAndDelete({
        _id: req.params.id,
    }, {rawResult: true}, (err, deletedCar) => {
        if(err) res.send('Loi trong luc xoa');
        else {
            console.log(deletedCar);
            res.sendStatus(200);
        }
    }
    )
})

app.listen(port, () => {
    console.log('App listening on port: ', port);
});