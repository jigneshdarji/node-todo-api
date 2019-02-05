const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default: null
    }
});

// var newTodo = new Todo({
//   text: '   Test trim '
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo:' + doc);
// },(e)=>{
//     console.log('unable to save Todo' + e);
// });


var User = mongoose.model('User',{
    email:{
        type:String,
        minlength:1,
        required:true,
        trim:true
    }
})

var newUser = new User({
    email:'test'
});

newUser.save().then((doc)=>{
    console.log('user added', doc);
},(e)=>{
    console.log('not able to add user ', e);
});