const express = require('express');

const app = express();

const middleWare = (req, res, next) => {
    console.log(`Check Data`);
    next();
}

app.get('/', (req, res) => {
    res.send('<h1>Middleware In Express.JS!</h1>')
})

app.get('/about', middleWare, (req, res) => {
    res.send('<h1>This Is About Page!</h1>')
})

app.listen(4000, function () {
    console.log(`Express Server Started on: http://localhost:4000`);
});