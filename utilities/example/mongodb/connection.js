/**
 * Creates a Connection instance. Each connection instance maps to a single database. 
 * This method is helpful when mangaging multiple db connections.
 */
const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/mydb');

module.exports = db;