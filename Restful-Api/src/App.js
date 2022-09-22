const express = require('express');
require("./db/conn");
const User = require('./models/users');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/users", (req, res) => {
    console.log(req.body);

    const data = new User(req.body);
    data.save().then(() => {
        res.status(201).send(data);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});