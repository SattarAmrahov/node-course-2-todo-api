//const MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://"+ process.env.IP +"/TodoApp", (err, db) => {
    if (err) {
        return console.log(`Unable to connect the MongoDB server`);
    }
    console.log("Connected to MongoDB");
    
    db.collection("Todo").find({ _id: new ObjectID("59f9ffd2b0d3de08d0dbbd36") }).toArray().then( (docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log(`Unable to fetch Todos. ${err}`);    
    });
    
    
    db.close();
});