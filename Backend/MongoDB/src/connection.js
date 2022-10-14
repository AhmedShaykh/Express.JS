const mongoose = require('mongoose');
const addUser = require('./createUser');

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/testing?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
	.once('open', () => {
		console.log('Yahoo...! Connection is Established');
		addUser();
	})
	.on('error', (err) => {
		console.log('Error: ', err);
	})