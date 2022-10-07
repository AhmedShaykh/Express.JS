const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie('myFirstCookie', 'Looks Good');
    res.send('Cookies...!');
});

app.get('/clearCookie', function (req, res) {
    res.clearCookie('myFirstCookie');
    res.send('Cookies Removed');
});

app.listen(4000, function () {
    console.log(`Express Server Started on: http://localhost:4000`);
});