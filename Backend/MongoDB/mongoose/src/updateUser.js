const User = require('./userModel');

const username = new User({
    name: 'AHM X'
});

username.save()
    .then(() => {
        // instance type using set n save
        username.set('name', 'Ahmed');

        // problem is, if we have many properties, 
        // we need to set many times like for AGE, ADDRESS and so on...
        username.save();

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