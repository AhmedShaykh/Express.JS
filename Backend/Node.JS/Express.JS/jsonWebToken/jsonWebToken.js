const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const secretKey = 'WhatEverYouWant*&*&*&'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile('login.html', {
        root: __dirname
    });
});

app.get('/login', function (req, res) {
    res.sendFile('login.html', {
        root: __dirname
    });
});

app.post('/login', function (req, res) {
    var token = null;
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        token = jwt.sign({ username: req.body.username }, secretKey, { expiresIn: '15m' });
    }
    res.redirect('/redirects?token=' + token);
});

app.get('/redirects', function (req, res) {
    console.log('req.query.token ', req.query.token)
    if (!req.query.token) {
        console.log('verifying... ', jwt.verify(token, secretKey))
        res.redirect('/admin');
    } else {
        res.send('Who are you??');
    }
});

app.get('/admin', function (req, res) {
    res.send('Wow you are Admin.....!!  <a href="/logout">Logout</a>');
});

app.get('/logout', function (req, res) {
    res.redirect('/login');
});

app.get('*', function (req, res) {
    res.end('What Exactly you want?');
});

app.listen(4000, function () {
    console.log(`Express Started on: http://localhost:${4000}`);
});