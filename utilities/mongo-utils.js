/**************************************************************************************
 *                Navtive mongo driver utilities
 *************************************************************************************/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection params
const mongoUrl = 'mongodb://localhost:27017/';
var _client,_db;

module.exports = {
  /**
   *  Callback API to established database connection to mongo server
   *  Recommend to put in beforeSession in config.js
  */ 
  connectDB : (databaseName) => {
    MongoClient.connect(mongoUrl, (err, client) => {
      if (err) throw new Error("Cannot connect to mongo Server");
      else {
        this._client = client;
        this._db = this._client.db(databaseName);
        console.log("Connection to mongo server is established");
      }
    })
  },

  /**
   * Close connection to mongo server. 
   * Recommend to put in after session in config.js
   */
  closeConnection : () => {
    if (this._client) {
      this._client.close();
      console.log("Connection to mongo server is closed");
    }
  },


  /**
   * {collectionName}: name of a collection/table in mongo database
   * return: collection objects in Promise
   */
  getCollections : (collectionName) => {
    return new Promise((resolve, reject) => {
      if (this._db) {
        resolve(this._db.collection(collectionName))
      }
      else {
        reject("Database is not connected");
      }
    });
  },

  /**
   * {collections}: collection object from getCollections
   * {queries}: array of json object
   * return: collections object in Promise
  */
  insertDocuments : (collections, queries) => {
    return new Promise((resolve, reject) => {
      collections.insertMany(queries, (err, result) => {
        if (err) { reject(err); }
        else { resolve([result,collections]); }
      })
    })
  },

  findDocuments : (collections, queries) => {
    return new Promise((resolve, reject) => {
      collections.find(queries).toArray(function(err, docs) {
        if (err) { reject(err); }
        else { resolve([docs, collections]); }
      });    
    });
  },

  removeDocument : (collections, queries) => {
    return new Promise((resolve, reject) => {
      collections.deleteOne(queries, function(err, results) {
        if (err) { reject(err); }
        else { resolve([results, collections]); }
      });    
    })
  }

}