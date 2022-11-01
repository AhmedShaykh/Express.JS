const express = require('express');
const router = new express.Router();
const User = require('../models/users');

// ========= POST ========= //

router.post("/users", async (req, res) => {

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

router.get("/users", async (req, res) => {

    try {
        const findData = await User.find();
        res.send(findData);
    }
    catch (e) { res.status(500).send(e); }

});

router.get("/users/:id", async (req, res) => {

    try {
        const _id = req.params.id;
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

router.patch("/users/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        });

        res.send(userUpdate);
    }
    catch (e) { res.status(404).send(e); }

});

// ========= DELETE ========= //

router.delete("/users/:id", async (req, res) => {

    try {
        const userDelete = await User.findByIdAndDelete(req.params.id);

        if (!req.params.id) {
            res.status(404).send();
        }

        res.send(userDelete);
    }
    catch (e) { res.status(500).send(e) }
});

module.exports = router;