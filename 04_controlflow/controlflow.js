//in thebelow code we are checking the temprature is less than 50 or not
//if the temprature is less than 50 then print "Less than 50" else print "temprature is greater than 50"

// const isUSerLoggedIn = true;
const temprature = 51

if (temprature === 41 ) {
    console.log("Less than 50");

}
else{
// console.log("temprature is greater than 50");
}

//< - lessthan , > - greater than ,<= lessthan equal to, >=greater than equal to, == equal to , != not equal, === equal to and type , !== not equal to and type

//in this below code we are checking that if the score is greater than 100 then print "user power is fly"

const score = 200
if (score > 100){
    let power = "fly"
    // console.log(`User Power : ${power}`);

}

//short hand notation

const balance = 1000;

if (balance > 500) console.log("test");
if (balance < 500) {
    console.log("less than 500");

} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");

}else if (balance < 1000) {
    console.log("less than 1000");
}
else {
    console.log("less than 1200");
}

//&& and or ampersand || or pipe
const userLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (userLoggedIn && debitCard) {
  console.log("Allowed to buy course");
}
else{
  console.log("Not allowed to buy course");
  
}

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User logged in");
// }

// if (loggedInFromGoogle) {
//   console.log("User logged in using google");
  
// }
// else if (loggedInFromEmail) {
//   console.log("User logged in using email");
// }
