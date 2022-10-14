const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name Should be Required.']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;