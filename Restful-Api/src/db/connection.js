const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/userdata?retryWrites=true&w=majority", {
    useNewUrlParser: true
}
).then(() => {
    console.log('Connection is Established');
})
    .catch((err) => {
        console.log('Error: ', err);
    })