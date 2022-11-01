const express = require('express');
require("./db/connection");
const userRouter = require("./routers/user");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});