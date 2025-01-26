//While loop

let index = 0;
while (index <= 10) {
    console.log(`value of index is : ${index}`);
    index = index + 1;
}


// while loop mai pehle consition check karte hai kisi variable ka phir log karte hai
let myArray = ["flash", "batman", "superman"];
let arr = 0
while (arr < myArray.length) { //yaha consition likha jayega agar arr less than myArray.length hoga toh loop chalega

    console.log(`Value of arr is : ${myArray[arr]}`);
    arr = arr + 1;  //arr kya hai arr + 1 matlab upar array 0 hai woh array ke lenght tak +1 hoga 
    
}

//do while
//do while mai pehle do hoga kaam hoga phir condition check hoga

let score = 11;

do {
    console.log(` score is : ${score}`);
    score++
    
} while (score <= 10); // yaha par score ki condition di hai ki score less than equal to 10 rahega lekin humne upar bataya hi nhi hai yeh kabh tak run hoga toh hume scoreko change karna hoga score ++ kabh tak jabh tak score <= 10 hoga
// agar score ki value hum 11 dede toh kya hohga??
//toh wo score is : 11 print hoga kyu kyuki do while mai kaam pehle hota hai uske baad condition check hota 
//rare use karte hai dowhile ko 

