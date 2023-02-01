const User = require('./userModel');

const username = new User({
    name: 'AHM X'
});

username.save()
    .then(() => {
        // Update Method
        username.update({ name: 'Ahmed' });

        // Username Update
        User.update({ name: 'AHM X' }, { name: 'Ahmed' });

        // Username Find & Update
        User.findOneAndUpdate({ name: 'AHM X' }, { name: 'Ahmed' });

        // Username Find ID & Update
        User.findByIdAndUpdate(username._id, { name: 'Ahmed' });
    })
    .catch((err) => console.log('Err ', err));