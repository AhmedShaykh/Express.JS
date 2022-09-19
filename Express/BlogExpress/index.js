const express = require('express');
const path = require('path');

const app = express();

const port = 4000;

app.use(express.static(path.join(__dirname, "static")));

app.get('/', (req, res) => {
    res.sendFile();
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
    res.status(202);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})