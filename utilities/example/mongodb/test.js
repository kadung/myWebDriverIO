const db = require('./connection')
const User = require('./models/User');

var dave = new User({
    name: 'Alex',
    username: 'alex@123',
    password: '123456789'
});

dave.save(function (err, dave){
    if (err) return console.error(err);
});

//db.close()
