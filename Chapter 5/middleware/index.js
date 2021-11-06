const express = require('express');
const app = express();

//Create a middleware for check request from client
var checkRequest = (req, res, next ) => {
    if(req.url === '/admin' /*Và id khác id cho phép*/) res.send('Access denied');
    else next();
};

//Using middleware
app.use(checkRequest);

//Init new router
app.get('/', (req, res) => {
    res.send('Access homepage successfully');
});

app.get('/admin', (req, res) => {
    res.send('Admin page access successfully')
})
// Khong vao duoc, vì midlleware đã chặn

app.listen(3009)