// //yeh object literal hai

// const user = {
//     username: 'John Doe',
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function (){
//         // console.log("Got user details");
//         // console.log(`username: ${this.username}`);
//         //abh yaha par hum username ko lerahe hai bahar se par yeh ek function hai toh uska bhi ek alag contect hoga na toh jabh humere bahar ke context se value lena hai toh hum this use karege
//         console.log(this);

//     }

// }
// console.log(user.username);
// console.log(this);

// // console.log(user.getUserDetails());
// // console.log(user.loginCount);

// //this keyword matlab aap current context ki baat karrahe the
// this is blank object hai {} usmai hum jo chahe daal skte hai

// // yeh ek object literals hai iska andar properties hote hai jaise array ke andar .lenght hai woh properties
// //this ek global object bhi hai browser mai

//--------------------- constructor function

// yeh new hume new context banane ke liye kaam aata hai aur isiko hum constructor function bolte hai

// const promiseOne = new Promise(); //new ka matlab yeh hota hai ki ek hi object literal se multiple intances bana sako
// const date = new Date();

function User2(username, loginCount, isLoggedIn) {
  this.username = username;     //ismai this ka matlab hum uss variable ki baat karrahe hai jaise ki this.username ek variable hai jismai hum ek username value de rahe hai parameter
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this  // yaha this yaani sabh return hua
}


const userOne = new User2("obaid", 12, true) // ek naya variable banaya gaya usmai user function ko call karke arguments for that variable ke parameters ko pass kiya gaya

// agar hum abh new variable banayege aur usmai dusre arguments pass karege toh 
const userTwo = new User2("faisal", 15, false);

console.log(userOne); // aur hum jabh userOne ko console karege toh uski value userTwo ki value se overrite hojayegi

// agar hum new likhege toh dono ka alag instance banega ek ek copy overrite nhi hoga
console.log(userTwo.constructor);

//new jabh bhi lete hai toh empty object create hota hai
// constructor function call hoota hai new keyword ke karan woh kya karta hai ki jitne bhi arguments hote hai usko iss instance ke andar pack kaerdeta hai
// this keyword hai jo bhi aap arguments likhe hai woh iss new instance ke andar inject hojate hai
// aapko function ke andar miljata hai

// constructor property hoti kya hai

// matlabh samjho khudi ka refernce matlab agar hum console.log(userTwo.constructor) iska constructor dekhege toh woh user hoga joki uska main function hai


