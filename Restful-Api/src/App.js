const express = require('express');
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;

app.post("/users", (req, res) => {
    res.send("Students Data");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});