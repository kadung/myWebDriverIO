/**
 * Assume that: 
 *     - Local mongodb is setup and running.
 *     - Mongodb has mydb database and users collection
 *     - User requires following fields: name, username, password
 */
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // Connect to database
  const db = client.db(dbName);
  // Connect to collection
  const userCollections = db.collection("users");

  // Insert a single document
  let newUser = {name: "dukie01", username: "dukie01", password: "dukie01"}
  let queryParams = {name: "dukie01"};

  // Add record
  userCollections.insertOne(newUser, (err, result) => {
    console.log("Insert result" + result);
  });

  // Delete a record
  userCollections.deleteOne(queryParams, (err, result) => {
    console.log("Delete result" + result);
  })

  client.close();
});

