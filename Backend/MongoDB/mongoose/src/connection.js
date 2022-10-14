const mongoose = require('mongoose');
const addUser = require('./createUser');
const User = require('./userModel');

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/testingdb?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
	.once('open', () => {
		console.log('Yahoo...! Connection is Established.');
		// addUser();
	})
	.on('error', (err) => {
		console.log('Error: ', err);
	})

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 4000);

// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', function (req, res) {
	User.find({})
		.then((users) => {
			// Return Array
			console.log('Users ', users);
			res.json(users);
		})
		.catch((err) => console.log('Error: ', err));
	// res.json(req.query); // try: localhost:3000/?email=abc@example.com&pwd=12345
});

app.post('/user', (req, res) => {
	console.log('req.body', req.body)
	res.end(JSON.stringify(req.body));
});

app.listen(app.get('port'), function () {
	console.log(`Express Started on: http://localhost:${app.get('port')}`);
});