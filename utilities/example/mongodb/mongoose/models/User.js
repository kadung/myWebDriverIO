/**
 * Initalize Mongoose model, a model is a collection in mongo database.
 * For more information, please visit  https://mongoosejs.com/docs/index.html
 */

const db = require('../connection');
const { Schema } = require('mongoose');

// User schema
let UserSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: Date,
    updated_at: Date
  });
  
  // On every save, add the date
  UserSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
   
    // change the updated_at field to current date
    this.updated_at = currentDate;
   
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.created_at = currentDate;
    
    next();
    });
    
// Create mogoose model
const User = db.model('User', UserSchema);

// Make this available to our users in our Node applications
module.exports = User;