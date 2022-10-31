const express = require('express');
require("./db/connection");
const User = require('./models/users');

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

// ========= POST ========= //

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

// ========= GET ========= //

app.get("/users", async (req, res) => {

    try {
        const findData = await User.find();
        res.send(findData);
    }
    catch (e) { res.status(500).send(e); }

});

app.get("/users/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const userFindId = await User.findById(_id);

        if (!userFindId) {
            res.status(404).send();
        }
        else {
            res.send(userFindId);
        }
    }
    catch (e) { res.status(500).send(e); }

});

// ========= PATCH ========= //

app.patch("/users/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const userUpdate = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        res.send(userUpdate);
    }
    catch (e) { res.status(404).send(e); }

});

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});