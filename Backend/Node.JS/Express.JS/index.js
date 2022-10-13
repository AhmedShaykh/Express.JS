const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res) {
    res.send('<h1>Learning Express.JS...!</h1>');
});

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});