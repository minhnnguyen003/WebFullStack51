const Joi = require('joi');
const express = require('express');
const e = require('express');
const mangaRouter = express();


//danh sách các loại truyện tranh 
const mangas = [
    {id: '1', name : 'Haì hước 1'},
    {id : '2', name: 'Truyện ma'},
    {id : '3', name: 'Lãng mạn'}
]

function validateManga(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(manga);
};


app.get('/', function(req, res) {
    res.send(mangas);
});

app.post('/', function (req, res) {
    const { error, value } = validateManga(req.body);
    console.log(error);
    console.log(value);
    if (error) return res.status(400).send(error.details[0].message);
    const manga = {
        id: mangas.length + 1,
        name: req.body.name,
    };

    mangas.push(manga);
    res.send(mangas);
});



// app.put('')

app.put('/:id', (req, res) => {

    const { error } = validateManga(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let updateIndex = mangas.findIndex((item) => item.id == req.params.id);
    if (updateIndex == -1) {
        return res.status(400).send("Manga not found");
    }
    try {
        mangas[updateIndex].name = req.body.name;
        res.send(mangas);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});
//app.delete('');
app.delete("/:id", (req, res) => {
    let deleteIndex = mangas.findIndex((item) => item.id == req.params.id);
    if (deleteIndex == -1) return res.status(400).send("Manga not found");
    try {
        mangas.splice(deleteIndex, 1);
        res.send(mangas);
    } catch (e) {
        return res.status(500).send("Server error");
    }
});


module.exports = mangaRouter;