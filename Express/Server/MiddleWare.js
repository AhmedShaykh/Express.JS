const express = require('express');
const app = express();

const port = 5000;

const middleWare = (req, res, next) => {
    console.log(`Hello Check Data`);
    next();
}

app.get('/', (req, res) => {
    res.send('<h1>Learning Express.JS!</h1>')
})

app.get('/about', middleWare, (req, res) => {
    res.send('<h1>This Is About Page!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})