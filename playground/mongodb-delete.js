//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('Not able to connect to Mongo DB Server');        
    }
    console.log('Mongo DB Connection successful !');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then( (result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then( (result)=>{
    //     console.log(result);
    // });

    //ObjectId("5c5115a479d407387fc6d1a9")
    
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
    
    client.close();
});