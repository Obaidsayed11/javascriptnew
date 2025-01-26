const userEmail = "o@gmail.com"; // agar yeh string ki jagah wemty string hoti ya phir empty array ho toh bhi true hota iako true maanleta hai

// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("don't have user email");
// }

/*

kitni falsy values hoti hai

false , 
0 ,
-0 ,
BigInt iske andar 0n likha jaata hai isko bhi false bola jaata hai ,
"" empty string ,
null ,
undefined ,
NaN ,



Truthy Values

"0", string ke andar values hai toh usko truthy values kehte hai
"false", strimg ke andar false value hai toh woh trughty value hoti hai
" " , string ke andar space hoti hai toh woh truthy value hoti hai
{} , empty object bhi truthy value hai
[] , empty array bhi truthy value hai
function () {} , empty funct bhi truthy value hai

*/

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}


//false == 0 //true
//false === 0 //false
//false == "" //true
// 0 == "" //true 


//logical operators

// && and operator ismai yeh check karta hai ki saari ki saari condition true aani chaiye 
// || OR operator ismai ek bhi condition true hui toh mai usmai jaaunga


//----------------------------------------------------
// (??) nullish coalescing operator :  null undefined
//--------------------------------------------------------
// kaibaar jabh aap database se call karege directly aapko response nhi milta hai aapko do response milskta hai chances hai aapko null response miljaaye ya phir response aaye na undefined aajaye uss case mi aapka pura code structure pareshaan hoskta hai uss cases ke liye specially isko banagaya hai ki values ko aapko treate karna hai ki agar values null ho toh uske under null assign karde ya unndefined ho toh uske ander undefined assign karde ya phir loi value ho toh value assign karde


 let val1 ;
//  val1 = 10 ?? 20
// val1 = null ?? 20
// val1 = undefined ?? 20
val1 = null ?? 20 ?? 30
 console.log(val1); 
 
//basically yeh ek callback hai ki errors ko hum kaise handle kar sakte hai


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); //: means else ? means if


