//const MongoClient = require("mongodb").MongoClient;
var {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://"+ process.env.IP +"/TodoApp", (err, db) => {
    if (err) {
        return console.log(`Unable to connect the MongoDB server`);
    }
    console.log("Connected to MongoDB");
    
    // db.collection("Todo").findOneAndUpdate({
    //     _id: new ObjectID("59f9ffd2b0d3de08d0dbbd36")
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });
    
    db.collection("Users").findOneAndUpdate({
        name: "Sattar"
    }, {
        $set: {
            name: "PC"
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });
    
    
    db.close();
});