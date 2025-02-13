//prototypes


// javascript ka behaviour prototypical bhai haar nhi maanti itni jldi matlab agar use kuch milta nhi hai woh upper layer tak jate jaata hai parent sabh jabh tak haar nmhi maanta jabh tak usse null value naa miljata hai

// tohh apka new keyword access iske throuh mili hai this keyword woh hi iske thri=ough kaam karraha hai clasees bhi aur jo aapka prototypical inheritance hai woh bhi iske through kaam karraha hai yeh sabh behaviour hai sabse puchta hai javascript


// array ------ object ---------- null
// string ------ object --------- null

// javascript mai sabh hi ek object hai array string yeh sabh object haiaur object ko null ka hi reference aata hai 


// let myName = "obaid     "
// console.log(myName.lenght)



// hum ek new method bana rahe hai 
let myHeros = ["thor", "spiderman"]  //yeh ek array hai

let heroPower = {     //yeh ek obj
    thor: "hammer",
    spiderman: "web",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

// Object.prototype.obaid = function(){
//     console.log("obaid is in all objects");  // agr hum object ke andar protoype phir methid karege toh woh array ke andar bhi jayega jaise ki ismai humne ek method banaya ki object mai yeh saarey obj mai hai yeh object ka method banaya hai
// }


Array.prototype.heyObaid = function(){
//  console.log("hey obaid i am in all arrays");
 
}
// heroPower.obaid()  // phir h=jub humne isae object mai inject kiya toh show kiya aur array mai bhi show kiya kyuki sab objexts hi hai javascript mai agar koi method humne object mai bnaya toh woh arrays mai bhi inject hoskti hai

// myHeros.obaid()  


// heroPower.heyObaid()
// myHeros.heyObaid()


//inheritance 


const User = {
  name : "obaid",
  age : 25,
}
const teacher = {
    makeVideo : true,

}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true,
    __proto__: TeachingSupport

}
teacher.__proto__ = User  // yehi prototypical inheritance hai jismai aap kisi aur ki properties ko access karskte ho
//yeh outdated approach hai

//modern syntax

Object.setPrototypeOf(TeachingSupport, teacher ) //ismai inherit kiya gaya matlab teacher ke andar TeachingSupport ka property daala gya


/////

let anotherUsername = "Obaid   " // ismai humne ek variable ke andar name store kiya hai

String.prototype.trueLenght = function(){   // string mai prototype aur method insert kiya gaya hai
    console.log(`${this}`);  //ismai this ka matlab reference lega kiska anotherUsername ka 
    console.log(`${this.name}`);  
    console.log(`True Lenght is ${this.trim().length}`); //ismai this mai jo value hai obaid usko trime karke uska lenght bataya hai
    
}
anotherUsername.trueLenght()  // yaha par anotherUsername ke andar trueLenght insert kiya
"obaid".trueLenght()  // ismai yaha static string  truelenght ke andar insert kiya 
"icetea".trueLenght()



