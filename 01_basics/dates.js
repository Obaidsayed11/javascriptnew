// in javascripts dates are decleared in miliseconds
let myDate = new Date();
// console.log(myDate.toString()); // return the date in string
// console.log(myDate.toDateString()); // return the date in string
// console.log(myDate.toLocaleString()); // return the date in 12 hour format
// console.log(typeof myDate); //return type of mydate


// let myCreatedDate = new Date(2023, 0, 23); //in hs the months is start from 0 to 11
// let myCreatedDate = new Date(2023, 0, 23,5,3); //in hs the months is start from 0 to 11

let myCreatedDate = new Date("2023-01-23"); //in hs the months is start from 0 to 11

let myTimestamp = Date.now(); // return the current time in miliseconds
// console.log(myTimestamp); // return the current time in miliseconds
// console.log(myCreatedDate.getTime()); // return the current time in miliseconds
// console.log(Math.floor(Date.now()/1000)) // to return the current time in seconds matlab agar seconds mai chahiye toh 1000 se divide karege

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

`${newDate.getFullYear()}` //string interpolation

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "Asia/Kolkata" // to show the time in specific timezone
})); // return the date in long format
