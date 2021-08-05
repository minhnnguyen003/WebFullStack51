const Joi = require('joi');
const express = require('express');
const { func } = require('joi');
const { response } = require('express');

const app = express();

app.use(express.json());

//danh sách các loại truyện ranh 

const mangas = [
    {id: '1', name : 'Trinh thám'},
    {id : '2', name: 'Truyện ma'},
    {id : '3', name: 'Lãng mạn'}
]

app.get('/api/manga', function(req, res) {
    res.send(mangas);
});



function validateManga(manga) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(manga, schema)
}

app.post('/api/manga', function (req, res) {
    const { error } = validateManga(req.body);
    console.log(error);
    console.log(value);

    const manga = {
        id: mangas.length + 1,
        name: 
    }

});

app.listen(8080, () => console.log('Server dang lang nghe tren cong 8080'));
