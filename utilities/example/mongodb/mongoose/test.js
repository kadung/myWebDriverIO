const db = require('./connection')
const User = require('./models/User');

var dave = new User({
    name: 'T123',
    username: 'alex@',
    password: '1234541231'
});

// Delete if any duplicated
User.deleteMany({name: 'T123'})
// Query a data to verify
.then(() => {
    return User.find({name: 'T123'})
})
// Insert new data to db
.then((result) => {
    console.log("###Result: " + result + "\n");
    return dave.save();
})
.then((result1) => {
    console.log("###Result1: " + result1 + "\n");
    return User.find({name: 'T123'})
})
.then((result2) => {
    console.log("###Result2: " + result2 + "\n");
    db.close();
})
.catch(console.log)