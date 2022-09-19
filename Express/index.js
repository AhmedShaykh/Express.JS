const express = require('express');
const path = require('path');

const app = express();

const port = 4000;

// const middleWare = (req, res, next) => {
//     console.log(req);
// }

app.use(express.static(path.join(__dirname, "public")));
// app.use(middleWare);

app.get('/home', (req, res) => {
    res.send('<h1>Learning Express.JS!</h1>')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
    res.status(202);
})

app.get('/data', (req, res) => {
    res.json({ "ahmed": 4 });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})