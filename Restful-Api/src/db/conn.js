const mongoose = require("mongoose");

const url = "mongodb+srv://admin:database1234@cluster0.manmfeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Is SuccessFul");
}).catch((e) => {
    console.log("Connection Failed");
})