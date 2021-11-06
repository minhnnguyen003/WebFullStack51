const express = require('express');
const app = express();
const port = 8080
app.use(express.json());

//pairing application/x-www-form
app.use(express.urlencoded({extended: true}));

// app.set('view', './views') //Quy định Folder chứa file giao diện
// app.set('view engine', 'pug') // Quy định template engine

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html')
});


// app.set('view', './views') //Quy định Folder chứa file giao diện
app.set('view engine', 'pug') // Quy định template engine

app.post('/user-info', (req, res) => {
    const { body } = req;
    console.log(body);
    res.render("user", { body });
});

app.listen(port);