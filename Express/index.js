const express = require('express');
const path = require('path');

const app = express();

const port = 4000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/home', (req, res) => {
    res.send('<h1>Learning Express.JS!</h1>');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
    res.status(202);
})

app.get('/data', (req, res) => {
    res.json({ "ahmed": 4 });
})

app.get('/data/:name', (req, res) => {
    res.send("Hello " + req.params.name);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})