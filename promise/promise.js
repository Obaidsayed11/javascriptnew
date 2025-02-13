/*
promise ka matlab yeh hota hai ki koi bhi operation queue mai hota hai par execute nhi hota hai mat promise hai ki hoga baadmai but abhi nhi hua hoga ya nhi hoga


promises ke 3 states hoote hai


pending fullfill aur rejected

promise apne aap mai ek object hai

pehle hum javascript mai async and await use karte the jab promises nhi hue karte then then libraries introduce hui bluebird and Q

usmai .then .catch .finially yeh sabh use karpate the library se

but abh usey integrate kardiya gaya hai toh node yeh sabh already deta hai 





*/

//new keyword se aapko ek new instance milta hai

//--------------------------------1st promise-----------------------------------------------------------------
//creation of promise
//promise apne andar ek callback leta hai

//function ke do part hote hai ya toh resolve hoga pura hoga ya toh reject hoga
const promiseOne = new Promise(function (resolve, reject) {
  // Do an aysnc task
  //DB task (db calls data recive inject) , cryptography , network calls

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

//consumption of promise

//.then ka aapka relation hai direct resolve ke saath
//.then ke andar ek callback hota hai
//uske andar ek argument recieve karta hai
// upar jo bhi kaam hua hota hai jo bhi values return karni hoti hai woh yaha niche return hoti hai
// abhi yeh connect nhi hua tha resolve se isliye pronise aage hua hi nhi values return karne ke time
// hum resolve() likh kar use connect karege uske baad hi .then connect hoga aur execute hoga

promiseOne.then(function () {
  console.log("promise consumned");
});

//---------------------------------new type 2nd promise---------------------------------------------------------------

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved");
});

// ismai ek hi part mai humne kardiya ismai hume variable ke andar store karne ki zarurat nhi agar koi task rahega toh resolve .then ko inform kardega aap kaam kardoge

//------------------3rd promise---------------------------------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "obaid", email: "obaid@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// ismai ek function banaye phir ek promise uske andar ek dunction resolve and reject phir ek set timneout uske andar resolve ko call kiya gaya then resolve mai hum parameters as an object ya phir as an array bhi bhejskte hai

//--------------------------------promise 4 ------------------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "obaid", password: "123" });
    } else {
      reject("Error : Something Went Wrong");
    }
  });
}, 1000);

promiseFour
  .then((user) => {
    console.log(user);

    return user.username;
  })
  .then((username) => {
    console.log(username, "ffwf");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

//in promiseFour humne ek promise banaya usmai agar error true raheaga toh username aur password print karega jo ki resolve mai hai else ek error hai reject mai woh print karega aur ismai agar hume user ke andar jo username hai usko access karna hai toh .then  se access karskte hai lekin pehle hume uss function ko call kake .then mai pure object ko user declare karege phir return karege user.username phir chaining hogi matlab ek aur then use karege phir usmai hume jo upar se username mila woh hum yaha as a parameter pass karege aur log karege toh hume woh mill jayega

// hum .catch bhi use karege usmai agar errors aaye toh
//aur finally matlab jo bhi aaye bhej hi do usmai

//-----------------------promise 5 -------------------------

// abh yeh zaruri nhi hota ki aap apna promise .then se hi handle karey app aync await se bhi handle karskte hai
// aap dono use kaerskte hai

// async await ka matlab yeh hota hai ki woh wait karta hai kaam hone ka wahi wait karta hai kaam ke hone ka phir aage badhta hai warna woh wahi pe aapko error deta hai

//ismai gracefully catch use nhi karta

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234567890" });
    } else {
      reject("Error : Javascript Went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  //isko hum promiseFive() nhi likhskte kyuki ke eventual completion object hai hai toh object hi function thodi hai
}
consumePromiseFive();

//ismai ek error ayega agar humara error true rahega toh kyuki async await error ko handle nhi karta error yeh aaya tha ki usko try catch mai handle karo

// aap dono bhgi use karskte ho agar try catch karna hai woh bhi ya phir

//fetch

// fetch ek library thi ya hai abhi ek object hai ek promise wapis dega
// yeh try catch ka example tha
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUsers()

//abh .then ka ek example


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
    
})


//fetch 