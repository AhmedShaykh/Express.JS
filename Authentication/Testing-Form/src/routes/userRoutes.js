const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
    res.send("<h1>Sign Up</h1>");
});

userRouter.post("/signin", (req, res) => {
    res.send("<h1>Sign In</h1>");
});

module.exports = userRouter;