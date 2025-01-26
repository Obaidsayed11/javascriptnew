//for each loop
// mostly arrays ke liye use hota hai foreach loop
// yeh ek higher order function hota hai jisme ek callback function pass karta hai

const coding = ["js", "ruby", "java", "python", "cpp"];


coding.forEach( function (item) {
  console.log(item);
  
} )   // () callback function ke andar function likha hai

// ismai pehle ek variable mai arrays pass kiye
// then forEach use kiya
// for each ka syntax aisa hai samjho
// coding.forEach liya uske aage ek callbackl banado uske andar ek function banado 
// for eg coding.forEach(function obaid (){})
// phir callcback ke andar ka function ka koi naam nhi hota toh obaid nhi likhege : coding.forEach(function (){})
// abh jaise hum function ke andar params pass karte the waise ismai bhi pass karege uska hum kuch bhi naam leskte hai 
// for eg coding.forEach(function (item){}) item array ke harr value ko lega jo upar const coding mai pass kiya hai


// callback arrow function foreach mai


//jaise ki humne arrow mai padha tha ki arrow mai noname bhi function hoskta hai ismai function likhne ki zarurat nhi
// coding.forEach((item) => {     
    
// })                               


//hum aise bhi use karskete hai ki pehle ek function banadiye printMe phir ek for each banakar uske andar ke callback mai printMe bhejdo
// function printMe (item) {
//     console.log(item);  
// }

// coding.forEach(printMe);  


// coding.forEach((item, index, arr) => {
// console.log(item, index, arr); // harrbar items ke alawa index bhi aata hai uske baad arr bhi aata hai

// })


// for each ke anndar aise scenarios bht hote hai arrays ke andar object
// [{},{},{}]
const myCoding = [
    {
        languageName : "javascript",
        langyuageFile : "js"
    },
    {
        languageName : "java",
        langyuageFile : "java"
    },
    {
        languageName : "python",
        langyuageFile : "py"
    },
]

// items matlab variable ke andar ke items // yaha pe console pe jo access haina woh  object ka access hai jo 
// //{} jo iske andar hai jaise ki item {} ka naam humne kya boldiya hai item toh harr iteration mai item hi hoga woh

myCoding.forEach( (item) => {
// console.log(item.languageName);  //ismai items apne array ka variable hoskta hai ya global var aur uske andar ka object jo ki language name 
                                 //woh le rahe hai
})

