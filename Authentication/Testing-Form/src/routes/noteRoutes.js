const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res) => {
    res.send("<h1>Not GET Request!</h1>");
});

noteRouter.post("/", (req, res) => {
    res.send("<h1>Not POST Request!</h1>");
});

module.exports = noteRouter;