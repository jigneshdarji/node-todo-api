const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123@ser';

bcrypt.genSalt(10, (err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    });
});
// var data = {
//     id:2
// }
// var token = jwt.sign(data,'test123');
// console.log(`TokenL ${token}`);

// var decCoded =jwt.verify(token, 'test123');

// console.log('decoded :', decCoded);
// var message = "testing 123User";
// var hasgMSg = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Hash: ${hasgMSg}`);

// var data = {
//     id:4
// };

// var token ={
//     data,
//     hash:SHA256(JSON.stringify(data) + 'testSomething').toString()
// }

// var resultHAsh = SHA256(JSON.stringify(token.data) + 'testSomethingj').toString();

// if(resultHAsh===token.hash){
//     console.log('data was not changed');
// }else{
//     console.log('Data was changed..')
// }