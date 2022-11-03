const express = require("express");
const app = express();

const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

const mongoose = require('mongoose');

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Hello Check");
});

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/authtest?retryWrites=true&w=majority")
    .then(() => {
        app.listen(4000, () => {
            console.log(`Server is listening on Port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })