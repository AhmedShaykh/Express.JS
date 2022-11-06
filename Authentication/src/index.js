const express = require("express");
require("./db/connection");

const app = express();

const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

const port = process.env.PORT || 4000;

app.use(express.json());

app.use((req, res, next) => {
    console.log("HTTP Method " + req.method + ", URL " + req.url);
    next()
});

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Hello Check");
});

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});