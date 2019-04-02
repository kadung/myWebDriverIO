/**************************************************************************************
 *                Navtive mongo driver utilities
 *************************************************************************************/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection params
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// MongoDB class
class mongoUtils {
  
}

// Use connect method to connect to the Server
module.exports =  {

  insertDocument: function(){

  }

    client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
  }); 
}

