const User = require('./userModel');

function addUser() {

    console.log('adding user');

    const username = new User({ name: 'AHM X' });
    username.save()
        .then(() => console.log('Saved User'))
        .catch((err) => console.log('Error ', err));

}

module.exports = addUser;