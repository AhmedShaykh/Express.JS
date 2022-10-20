const express = require('express');
const mongoose = require('mongoose');
const addUser = require('./createUser');
const User = require('./userModel');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/testing?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
    .once('open', () => {
        console.log('Yahoo...! Connection is Established');
        addUser();
    })
    .on('error', (err) => {
        console.log('Error: ', err);
    })

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    User.find({})
        .then((users) => {
            console.log('Users ', users);
            res.json(users);
        })
        .catch((err) => console.log('Error: ', err));
});

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});