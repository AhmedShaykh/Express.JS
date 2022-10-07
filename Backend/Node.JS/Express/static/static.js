const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use('/public', express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.send("<h1>Learning Express.JS!</h1>");
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "/about.html"));
    res.status(202);
})

app.get('/users', function (req, res) {
    res.json([{ id: 1, name: 'AHM X' }, { id: 2, name: 'SQLN' }, { id: 3, name: 'MAJID' }]);
});

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});