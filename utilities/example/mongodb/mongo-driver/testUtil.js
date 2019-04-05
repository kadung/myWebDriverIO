const mongoUtils = require('../../../mongo-utils');

let newUser = [{name: "dukie100", username: "dukie100", password: "dukie100"}];
let queries = { name: "dukie100" }

mongoUtils.connectDB("mydb");
// Put on framework inital so there are 5 second until browser is opened
setTimeout( () => {
    mongoUtils.getCollections("users")
    .then((collection) => {
        return mongoUtils.insertDocuments(collection, newUser);
    })
    .then(([result, collection]) => {
        console.log("\n Number insert documents: " + result.insertedCount);
        return mongoUtils.findDocuments(collection, queries);
    })
    .then(([result, collection]) => {
        console.log("\n Find result is: ");
        console.log(result);
        return mongoUtils.removeDocument(collection, queries);
    })
    .then(([result, collection]) => {
        console.log("\n Number of delete document: " + result.deletedCount);
    })
    .catch((err) => { 
        console.log(err);
    })
    .finally(() => {
        mongoUtils.closeConnection();
    })
}, 5000);


