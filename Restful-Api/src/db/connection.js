const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/testing?retryWrites=true&w=majority", { useNewUrlParser: true });

mongoose.connection
    .once('open', () => {
        console.log('Connection is Established');
    })
    .on('error', (err) => {
        console.log('Error: ', err);
    })