/**
 * Initalize Mongoose model from schema.
 * A model is a collection in mongo database.
 * For more information, please visit  https://mongoosejs.com/docs/index.html
 */

const db = require('../connection');
const UserSchema = require('./UserSchema');

// Create mogoose model
const User = db.model('User', UserSchema);

// Make this available to our users in our Node applications
module.exports = User;