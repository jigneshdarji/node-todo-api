//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('Not able to connect to Mongo DB Server');        
    }
    console.log('Mongo DB Connection successful !');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //    text:"Testing one",
    //    completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert to do', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name:"jignesh1",
    //     age:25,
    //     location:"Iselin"
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});