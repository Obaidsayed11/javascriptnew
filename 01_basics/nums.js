// {const balance = 100;
// const newbalance = new Number(100); //it will be converted to number agar string raha to Nan return karega
// console.log(newbalance);

// console.log(newbalance.toString().length); //ismai no ko strings mai convert karta hai aur .lenght se value ka lenght dikhata hai
// console.log(newbalance.toFixed(2)); // ismai no ke aagey .00 lagata hai jaisse ismai 2 likha hai to 100.00 return karega


// const otherNumber = 123.856;
// console.log(otherNumber.toPrecision(3)); // ismai matlab precised value dilhata hai jaise 3 likha hai toh 123 dikhayega lekin precised value chahiye toh 124 dikhayega 

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // ismai no ko bhi string mai convert karta hai aur .toLocaleString() se value ko bhi convert karta hai matlab commas se segricate karta hai

// console.log(hundreds.toLocaleString('en-IN', )); // ismai abh hum indian standard ke commas lete hai 

// }
//-----------------------------------------------------MATHS----------------------------------------------------------------------------//


console.log(Math);
console.log(Math.abs(-5)); // ismai absolute value return karta hai matlab negative ko positive mai return karega -5 ko 5
console.log(Math.round(4.4)); // ismai no ko round karta hai jaise 4.6 ko 5 return karega jaise 5 ya usse upar value to 5 aur 5 se kam to 4 return karega


console.log(Math.ceil(4.4)); // ismai agar no 4 se upar gaya point mai to 5 return karega
console.log(Math.floor(4.4)); // ismai agar no 4 ke aage kuch bhi point ho toh 4 hi return karega lowest value

console.log(Math.random()); // ismai random value return karta hai matlab 0 se 1 maanle 0.5, 0.7, 0.9, 0.1, 0.3, 0.5, 0.7, 0.9, 0.1, 0.3, 0.5, 0.7, 0.9,

console.log((Math.random()*10) + 1); // ismai multiply by 10 karey taaki 0.1 se 1 ho jaye +1 isliye add kiye taaki 0 mai value naa aaye

console.log(Math.floor(Math.random()*10) + 1); // ismai math.floor isliye add kiye taaki 1 ke upar koi bhi value ho to min value hi dikhaye jaise 1.9 ho toh 1 hi show karega

const min = 10; // min value is 10
const max = 20; // max value is 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //ismai min.floor ke andar math.random phir min - max 10 hota hai +1 point mai value na aaye isliye aur + min last mai kyuki min value se kam value naa ho



 

