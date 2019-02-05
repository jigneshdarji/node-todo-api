//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
    if(err){
        return console.log('Not able to connect to Mongo DB Server');        
    }
    console.log('Mongo DB Connection successful !');
    const db = client.db('TodoApp');

//    db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID('5c5115a479d407387fc6d1a9')
//     },{     
//         $set:{
//             completed:true
//         }
//     }, {returnOriginal: false}).then((result)=>{
//         console.log(result);
//     });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5c510eedd5ea5702649a6ead')
        },
        {
            $set:{ name:'Jignesh Darji'},
            $inc:{age: 1}
        },
        {
            returnOriginal:false
        }
    ).then((result)=>{
        console.log(result);
    });
    //5c510eedd5ea5702649a6ead
    
    client.close();
});