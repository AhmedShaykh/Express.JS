const express = require('express');
require("./db/connection");
const User = require('./models/users');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

// app.post("/users", (req, res) => {
//     console.log(req.body);

//     const data = new User(req.body);
//     data.save().then(() => {
//         res.status(201).send(data);
//         return data;
//     }).catch((e) => {
//         res.status(400).send(e);
//         console.log(e)
//     });
// });

app.post("/users", async (req, res) => {
    try {
        const data = new User(req.body);

        const createUser = await data.save();
        res.status(201).send(createUser);
    }
    catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});