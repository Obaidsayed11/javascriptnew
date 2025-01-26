// for of loop
// it is array specific loop

// ["","",""] //array bhi aapke iterators hai
// [{},{},{}] //object bhi aapke iterators  string bhi

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //ismai object jo hai voh js wale object ki baat nhi horahi woh general konse object pe loop lagana hai woh hai
//   console.log(num);
}

const greetings = "hello world";
for (let greet of greetings) {
//   console.log(`Each Char is : ${greet}`);
}


//maps 
//its like arrays
// yeh key value pairs ko hold karta hai 
// yeh inserted original order ko yaad rakhta hai object mai aisa nhi hota koi bhi order mai rakhta hai usmai kaise bhi aata hai
// ismai duplicate values nhi milti saari unique values rehti hai

// const map = new Map(); //Maps apne aap mai hi ek object hai
// map.set('IN', "India"); // yeh key value pair hai  ismai IN key hai India value hai
// map.set('USA', "United States");
// map.set('FR', "France");
// console.log(map); // console ka output Map(3) { 'IN' => 'India', 'USA' => 'United States', 'FR' => 'France' }
// ismai agar mai IN key wale ko phirse map karta toh woh repeat nhi hota unique hi milta

// for (const [key, value] of map) {
//     // console.log(key, ':-', value); //agar hume ise for of loop use karna hai toh  map ki value ek hi array mai print hoti hai toh 
//                                    //[key, value] yeh syntax hai
    
// }

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'GTA',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); //its not iterable in object
    
// } //object ke liye yeh print nhi horaha hai yeh kaam nhi karraha hai

// -------------------------for in loop----------------------

//objects ke liye

const myObject = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    swift : "swift"
}

for (const key in myObject) {
   console.log(`${key} :- ${myObject[key]}`); //for in loop mai agar key or value dono print karna hai toh yeh syntax hai
   

}

//arrays ke liye
const programming = ["js", "c++", "python", "swift"];

for (const key in programming) {
    console.log(key); // for in loop mai isko 0,1,2,3 print kara hai array ki keys ha array ki bhi keys hoti hai
    console.log(programming[key]); //yeh syntax hai arrays lo print karneka for in loop mai 
   
}


//maps for for in loop
const map = new Map(); //ismai Map itterable nhi hai isliye yeh loop mai nhi jaata 
map.set('IN', "India"); 
map.set('USA', "United States");
map.set('FR', "France");

for (const key in map) {
    console.log(key);
    
}

///in the summary arrays ke liye for of loop or objects ke liye for in loop use hota hai