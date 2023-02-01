const express = require('express');
const app = express();

const port = 4000;

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get('/home', (req, res) => {
    res.send('<h1>Learning Express.JS!</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});