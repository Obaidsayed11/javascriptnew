function obaid() {
  console.log("o");
  console.log("b");
  console.log("a");
  console.log("i");
  console.log("d");
}
// obaid();
//obaid is the refernce and () is the argument but execution

// function is the function keyword and obaid is the name of the function

//(num1, num2) these are the parameters jo function ke saath uske andar pass karte hai usko paramaters kehte hai jo pehle define karna hota hai
function addTwoNumbers(num1, num2) {
  // console.log(num1 + num2);
}
addTwoNumbers(10, 20); //(10, 20) these are the arguments jo values pass karte hai parathesis mai function call karte time usko arguments kehte hai

// in this below function hume 3 numbers pass karna hota hai toh hum unn 3 numbers ko define karege then function ke andar ek variable banakar uske andar store karege aur phir uss variable ko return karege uske baad uss returned variable ko niche call karke uske function mai arguments mai data pass karege
function addThreeNumbers(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  return sum;
}

const sum = addThreeNumbers(10, 20, 30); // yah returned variable ko call karke uske andar function ke andar data arguments mai pass karege phi execution mai return karega
// console.log(sum);


// yaha niche ke function mai loginUserMessage check karraahe hai ki user login hai ya nhi parameter mai username diya hai default if matlab agar username nhi hai to please enter username else agar hai toh return kar obaid logged in successfully
function loginUserMessage(username ) {
  if (username === undefined) {
    console.log("please enter a username");
    return;
  } 
// return `${username} just logged in`;
  else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessage("sam"));



function calculateCartPrice(...num1) {  //ek hi parameter mai bht saari values paas karsklte hai yeh ek rest operator hai aur array mai store karta hai
    return num1;
}   
// console.log(calculateCartPrice(200, 400, 500)); //output [ 200, 400, 500 ]



const user = {
    username: "obaid",
    price: 199
}
function handleObject(user) {
    // console.log(`username is ${user.username} and price is ${user.price}`);
}
handleObject({username : "obaid",
    price : 199
});


myNewArray = [200, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
