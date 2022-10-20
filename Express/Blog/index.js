const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

const port = 4000;

app.use('/', require(path.join(__dirname, "routes/blog.js")));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
})