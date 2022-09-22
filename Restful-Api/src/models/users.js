const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Id Already Here!"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 9,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,

    }
});

const User = new mongoose.model("UserData", userSchema);

module.exports = User;