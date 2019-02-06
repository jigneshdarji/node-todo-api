const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c5a4d4a6cc03447e06a0438ML';
var userId = '5c58fa2a7e0c8d034c5a436b';
if(!ObjectID.isValid(id)){
    console.log('Invalid Id');
}

Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos' , todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo:', todo);
});


Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id: ', todo);
}).catch((e)=>console.log(e));

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('Id not found');
    }
    console.log('User By Id: ', user);
}).catch((e)=>console.log(e));