const Joi = require('joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

// Require user route
const userRoute = require('./router/userRouter')
app.use('/api/users', userRoute);

const mangaRoute = require('./router/mangaRouter')
app.use('/api/manga', mangaRoute);
// app.use(express.json());

app.listen(8080, () => console.log('Server dang lang nghe tren cong 8080'));
