const User = require('./userModel');

function addUser() {

    console.log('adding user');

    const joe = new User({ name: 'Doe' });
    joe.save()
        .then(() => console.log('saved user'))
        .catch((err) => console.log('Err ', err));

}

module.exports = addUser;