const express = require('express');
require("./db/conn");
const User = require('./models/users');

const app = express();
const port = process.env.PORT || 8000;

app.post("/users", (req, res) => {
    console.log(res.body);

    const data = new User(res.body);

    res.send("Students Data");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});