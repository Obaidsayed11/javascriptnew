//arrays

const myArray = [0, 1, 2, 3, 4, 5];
// const myArray2 = ["obaid", "sayed"];
// const myArray3 = new Array(0,1,2,3)
// console.log(myArray[2]);

//arrays methods
myArray.push(6);  //ads a value at the end of the array
myArray.pop(); //removes the last value of the array
// console.log(myArray.pop());

//myArray.unshift(9); //adds a value at the beginning of the array
//myArray.shift(); //removes the first value of the array
// console.log(myArray.includes(9)); //returns true if the value is in the array if not then false
// console.log(myArray.indexOf(9)); //ismai index of values bata ta hai ismai pucha hai ki 9 ka index kya hai lekin 9 hai nhi toh -1 return

const newArray = myArray.join(); //joins the array into a string
// console.log(myArray);
// console.log(newArray);

//slice

// console.log("A" , myArray);
const myn1 = myArray.slice(1,3) //ismai slice 1 se 3 ke beech ke values ko return karta hai matlab 1 aur 2 ko return 0 aur 3 se remove karega yeh original value lo manipulate nhi karta hai lekin jaise iske baad original value ko print karoge to voh as it is same rahegi

// console.log(myn1); //[ 1, 2 ] yeh values return hui slice ki matlan yeh range ke beechmai deta hai values aur 

// console.log("B" , myArray);  //uske baad jab original value check kiye toh B [ 0, 1, 2, 3, 4, 5 ] yeh return kiya matlab original value change nhi hui

//splice

const myn2 = myArray.splice(1,3) //ismai 1 se 3 tak value rakega baaki saari remove karega splice
// console.log(myn2); //[ 1, 2, 3 ] 1 se 3 return kiya baaki saari values remove
// console.log("C" , myArray);//uske baad jabh original value dekha to usko manipualte kiya matlab C [ 0, 4, 5 ] return kiya

const marvel = ["obaid", "sayed", "hitesh", "sahil"];
const dc = ["batman", "superman", "wonderwoman"];

// marvel.push(dc); //push dc array in marvel array

// console.log(marvel); // abh yeh return karega arrqys ke andar arrays jo ki ek sahi tareeka nhi hoga

/*[
    'obaid',
    'sayed',
    'hitesh',
    'sahil',
    [ 'batman', 'superman', 'wonderwoman' ]
  ]
  */ //ismai woh merged 2nd array ko 1 element hi liya hai agar hum index of 4 dekhenge toh pura dc show karega

// console.log(marvel[4][0]); //batman return karega 4 element ke andar 1st index

// const allheros = marvel.concat(dc); //jo ki ek sahi tareeka nhi hoga humne new variable banaya kyuki agr hum direct marvel.concat(dc) use kiye toh woh new array ko kahin hold nhi karr payega jo yeh variable se hold hopayega

// console.log(allheros);

//jo push method hai woh existing array mai merge karta hai lekin concat jo hai woh new array banata hai

//-------------------spread method----------------

// const newheros = [...marvel, ...dc]; //spread operator is used to merge two arrays or more arrays into one array
// console.log(newheros); //same kaam hi karta hai lekin spread operator use karta hai 


//---lots of arrays in one array---

const anotherArray = [1,2,3,[4,5,6],7,8,9]; //ismai arrays ke andar arrays hai 
const realArray = anotherArray.flat(Infinity); //ismai flat method use hua hai jismai arrays ke andar arraays sabko print karta hai aur infinity ki jaga hum kitne arrays hote hai uska count dete hai lekin infinity se woh apne app count karta hai

// console.log(realArray);

// console.log(Array.isArray("hello")); //returns false because hello is a string not an array
// console.log(Array.from("hello")); //converts string into an array
// console.log(Object.keys({name:"obaid"})); //converts object into an array

// console.log(Array.from({num:"123"}));


let score1 = 100
let score2 = 200
let score3 = 300

const highscore = [Array.of (score1, score2, score3)]
// console.log(highscore);

