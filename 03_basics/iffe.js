//Immediately Invoked Function Expression (IIFE)
//jaise function likha usse turant execute karana hai uske bht se tarike hote hai 
//agar koi function likh rahe hai hum nahi chahte ki woh function ke andar koi global variable kuch problem kare
//hume global scope se pollution nhi chahiye
//yeh problem ko solve karne ke liye hum IIFE use karte hai


//named IFFE function obaid this is the name 
(function obaid (name){
    console.log(`Db Connected Successfully ${name}`);
    
})("obaid"); //function lo () ke andar likha hai phir call bhi karskte hai end mai execution call karne ke liye ()...phir iske ke andar phir argument bhi liktskte hai 
//IIFE ko rokne ke liye ; use karna hai warna usko yeh nhi malum hoga ki kaha IIFE end karna hai



//arrow function //no name IFFE
(() => {
    console.log("Db Connected Successfully ");
    

})(); 


//what is IFFE in interview
// global scope ke pollution se problem hoti hai kaibaar toh globalscope ke variable se jo polllution hoti hai usse bachne ke liye IIFE use karte hai
//IIFE is a function that is executed immediately after it is defined