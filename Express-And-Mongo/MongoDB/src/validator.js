const mongoose = require('mongoose');
const validator = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 4,
            message: 'Name must be longer than 4 Characters'
        },
        required: [true, 'Name Should be Required.']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;