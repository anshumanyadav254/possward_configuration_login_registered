// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb+srv://Anshuman:anshuman@cluster0-17jj2.mongodb.net/Password_Auth?retryWrites=true&w=majority"
// MongoClient.connect(url, function(error, db) {
//     if (error) throw error;
//     console.log("Database Connected");
//     var dbo = db.db("Password_Auth");
//     var myobj = {
//         name: " Yadav ji samosa wale ",
//         address: "Jaunpur"
//     }

//     dbo.collection("Password").insertOne(myobj,
//         function(err, result) {
//             if (err) throw err;
//             //console.log("collection created");
//             console.log("Record inserted");
//             //console.log(result);

//         });


// });
var modelMap = new Map();

var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

exports.getModel = function(collectionName) {
    if (modelMap.get(collectionName)) {
        return modelMap.get(collectionName);
    } else {
        var collSchema = new Schema({ any: Schema.Types.Mixed }, { collection: collectionName });
        var schema = Mongoose.model(collectionName, collSchema);
        modelMap.set(collectionName, schema);
        return schema;
    }
};

// var mysql = require("mysql");
// var con = mysql.createConnection({ //Configuration Object 
//     host: "localhost",
//     user: "root",
//     password: "goldtree9",
//     database: "demo"
// });
// // con.connect(function(err){
// //   if(err){throw err}
// //   console.log("Connected to The Database");
// // })
// //Creating A Database Connection

// con.connect(function(err) {
//     if (err) { throw err };
//     var values = [
//         ["nameA", "addressA"],
//         ["nameB", "adressB"],
//         ["namec", "adressC"],
//     ]
//     var sql = "Insert into customers Values ?"; // var sql="Select * from customers where name='b'";
//     // var sql="Insert into customers(name,address) values('Hello','World')"
//     // var sql="Delete from customers where address='PlaceB'";
//     // var sql="Update customers set name='hello' where address='PlaceA'";
//     con.query(sql, [values], function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         console.log("Inserted Successfully");
//     })
// })