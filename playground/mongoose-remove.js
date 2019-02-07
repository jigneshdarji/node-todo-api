const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove()
// Todo.findOneAndRemove({_id:'5c5b9c045f1c861f680b0c34'}).then((todo)=>{
//     console.log("Removed Todo: ", todo)
// });

Todo.findByIdAndRemove('5c5b9c045f1c861f680b0c34').then((todo)=>{
    console.log("Removed Todo: ", todo)
});