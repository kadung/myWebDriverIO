const db = require('./connection')
const User = require('./models/User');

// Insert document
var dave = new User({
    name: 'T123',
    username: 'alex@',
    password: '1234541231'
});

dave.save().then(function(dave){
    db.close()
});

// Query document


// Delete document



