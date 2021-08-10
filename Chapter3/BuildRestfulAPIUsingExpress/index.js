const Joi = require('joi');
const express = require('express');
const e = require('express');
const app = express();

// Require user route
const userRoute = require('./router/userRouter.js')
app.use('/users', userRoute);

const mangaRoute = require('./router/mangaRouter.js')
app.use('./manga', mangaRoute);
app.use(express.json());

app.listen(8080, () => console.log('Server dang lang nghe tren cong 8080'));