const obd = new String ("Hello World" );
console.log(obd.toUpperCase()); // uppercase the string
console.log(obd.charAt("4")); // return the character at index 4
console.log(obd.indexOf("W")); // return the index of W

const newString = obd.substring(0, 4); // return a substring 0 se 4 ke beech ke values return karega
console.log(newString); // return "Hell"


const anotherString = obd.slice(0, 4); // return value from 0 to 4 matalab 0 to 3 ke values dikhata hai 0 se 4 ke beech ke
console.log(anotherString); // return "Hell"
// console.log(anotherString);

const newStringOne = "    hello world    ";
console.log(newStringOne.trim()); //ismai spaces ko remove karta hai aage aur piche ke
console.log(newStringOne.trimEnd()); // ismai sirf end ke space ko hata ta hai

const url = "https://google.com/obaid%20sayed";
console.log(url.replace("%20", "-")); //replace %20 with - in url
console.log(url.includes("obaid")); // check if the string contains "obaid""-"));
console.log(url.startsWith("https://")); // check if the string starts with "https://"
console.log(url.endsWith("/obaid%20sayed")); // check if the string ends with "/obaid%20sayed"
console.log(url.split("/")); // split the url into an array of strings
console.log(url.split("obaid")); // split the url into an array of strings

const xyz = ["hello", "world", "obaid", "sayed"];
 xyz.splice(2,3, "issp"); // ismai yeh array hai toh 0 se start hoga aur 2nd pe value daalega aur 3rd se value delete karega matlab 3rd and 4th and 5th value
console.log(xyz);       


