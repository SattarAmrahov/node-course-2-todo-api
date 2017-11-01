const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://"+ process.env.IP +"/TodoApp", (err, db) => {
    if (err) {
        return console.log(`Unable to connect the MongoDB server`);
    }
    console.log("Connected to MongoDB");
    
    // db.collection("Todo").insertOne({
    //     text: "walking the dog",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    
    // db.collection("Users").insertOne({
    //     name: "Sattar",
    //     age: 25,
    //     location: "Baku"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert user", err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    
    db.close();
});