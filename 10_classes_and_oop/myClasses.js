// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User("obaid", "obaid@gmail.com", "123")
// console.log(user.encryptPassword());
// console.log(user.changeUsername());

//behind the scenes

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const users = new User("obaid", "obaid@gmail.com", "123")

console.log(users.encryptPassword());
console.log(users.changeUsername());

//yeh humne normal function call se kiya tha normal constructor function jismai hume baar baar reference function ke protype mai jaakar ek method function banakar return karna padhta tha 

//but with class hume inherit karna easy hojata tha woh behind the scenes prototype mai jaakar function banata hai hume bass normal function bana na hota hai
