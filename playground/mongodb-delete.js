//const MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://"+ process.env.IP +"/TodoApp", (err, db) => {
    if (err) {
        return console.log(`Unable to connect the MongoDB server`);
    }
    console.log("Connected to MongoDB");
    
    db.collection("Todo").deleteMany({text: "eating lunch"}).then((result)=>{
        console.log(result);
    });
    
    
    db.close();
});