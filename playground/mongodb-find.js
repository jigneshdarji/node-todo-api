//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('Not able to connect to Mongo DB Server');        
    }
    console.log('Mongo DB Connection successful !');
    const db = client.db('TodoApp');

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos', err);
    // });

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos', err);
    // });

    // db.collection('Todos').find({_id: new ObjectID('5c51103179d407387fc6d026')}).toArray().then((docs)=>{
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to fetch Todos', err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log("Todos Count:" + count);
        
    },(err)=>{
        console.log('unable to fetch Todos', err);
    });

     db.collection('Users').find({name:'jignesh'}).toArray().then((docs)=>{
        console.log("Users");
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch users', err);
    });

    client.close();
});