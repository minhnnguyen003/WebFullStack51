const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Parse to json
const app.use(bodyParser.json());

//Pairing application /x-www-form
app.use(bodyParser.urlencoded({}))