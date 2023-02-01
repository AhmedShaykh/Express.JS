const User = require('./userModel');

const username = new User({
    name: 'AHM X'
});

username.save()
    .then(() => {
        // Username Remove
        User.remove({ name: 'AHM X' });

        // Username Find & Remove
        User.findOneAndRemove({ name: 'AHM X' });

        // Username Find ID & Remove
        User.findByIdAndRemove(username._id);
    })
    .catch((err) => console.log('Error: ', err));