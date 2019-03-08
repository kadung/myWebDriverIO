/**
 * Creates a Connection instance. Each connection instance maps to a single database. 
 * This module is helpful when mangaging multiple db connections or specific options
 * for specific instance.
 */
const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost/mydb', { useNewUrlParser: true });

module.exports = db;