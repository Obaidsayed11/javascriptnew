function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; // is function ko as a object bhi treat karskte hai .power lagaya hai jaise

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// yeh example se hume yeh pata chala ki function ek function to hai hi par ek object bhi hai


//importance of new keyword

function createUser(username, score) { //yaha hum ek function banayege createUser naam se usmai do params pass karege
  this.username = username;  //this matlab jis username mai pass karna hai 
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;          //yaha par ek increment ka function banaya usmai this.score ko badhaya gaya 
};

createUser.prototype.printMe = function () {
  console.log(`the score is ${this.score}`);  // ismai print kiya gaya
};
const chai = new createUser("chai", 25)    // yaha par do arguments pass kiye gaye  ismai new use kiya gaya kyuki do alag alag argument variable hai upar printme function ko yeh nhi pata hoga ki call indono mai se kisko karna hai toh new karke do instance banjehga usmai aasani se empty object mai push kardiya jayega
const tea =  new createUser("tea", 250)

chai.printMe()  // yaha par print kardiya gaya matlab function calls


//

// new keyword creates a new object matlabh ek khaali object new object ko ek reference chahiye hota hai jaise ki upar wale example mai createUser yeh ek function hai joki new key word ka reference hai.  

// prototype toh object se linked hi hota hai .. hum new lagate hai javascript new keyword ke through constructor function deti hai 

// jaise upar example mai humne prototype jo lagaya hai woh hawe mai hi that jabtak jaise humne new keyword lagaya tabh ek new object create hua uske andar ek prototype inject hua phir humne ek method bhi define kiya thab printMe eho bhi inject/define kiya phir lekin hume kiske basis pe banana hai woh dekhta hai humne upar example mai createUser iske basis pe banaya hai

// phir constuctor function ke andar prototype linked hota hai phir uske baad constructor ko call kardiya jaata hai jismai jo bhi aapke this.username this.score saarey inject kardiye jaatey hai

// phir sabh inject karke hume ek new object dediya jaata hai jaise ki upar chai mai diya gaya saare usmai value hote hai


// yeh teen keyword behind the scenes itna kuch karjaate hai (object, array, function)



