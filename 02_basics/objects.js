//singleton
//object.create

//objects literals
const mySym = Symbol("key1");

const JsUser ={
    name: "obaid",                 //in this name is the key and obaid is the pair value
    "full name": "obaid sayed",
    age :18,
    location : "india",
    [mySym] : "mykey1",  //agar humey symbol lo acess karna hai toh key ko square brackets mai lenge
    email: "obaid@.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]

}


// console.log(JsUser.email);  //agar dot mai lenge to as a string dta hai lekin yaha likhne ki zarurat nhi hoti .email se hojata not a good method


// console.log(JsUser["email"]); //yeh ek sahi method hai email ko access karne ka lekin ismai bracket ke andar as a string dena padhta hai kyuki key values behind the scenes as a string kaam karti hai toh string lenge jabh hm [] ke andar object ascess karey
// console.log(JsUser["full name"]);
// console.log(JsUser["lastLoginDays"]);

// console.log(JsUser,"fullname");


// console.log(JsUser[mySym]); //Symbol ismai bhi square mai lenge

JsUser.email = "obaid11@gmail.com"; //you can change the value of the key pair by using =
// console.log(JsUser.email);
// Object.freeze(JsUser); //freeze method is used to prevent the object from being modified
// JsUser.email = "obaid12@gmail.com";
// console.log(JsUser.email);


//functions inside objects

JsUser.obaid = function(){
    // console.log(`this is my email, ${this.email}` ); //yaha par jsUser variable ke andar ke object ke key value ko lene ke liye ek function banaya gaya obaid naam ka uske andar phir email ko liya gaya
}

// console.log(JsUser.obaid());



//singleton
// const tinderUser1 = {} //singleton object
const tinderUser = new Object(); //non singleton object
 

tinderUser.id = "123abc";
tinderUser.name = "obaid";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "obaid@.com",
    fullname: {
        userfullname: {
            firstname: "obaid",
            lastname: "sayed"
        }
    }
}
//  console.log(regularUser.fullname?.userfullname?.firstname,"kdsadid");

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
    
}
 

// const obj3 = Object.assign({}, obj1, obj2); //Object.assign() is used to copy the properties from one or more source objects to a target object matlab ki agar do objects ke data ko combine karna hai toh yeh se karskte hai  aur {} isliye use karte hai kyuki jo naya value store hoga woh obj1 mai add hoke store hoke phir obj3 mai hoga lekin hum agar naya variable bana hi rahe hai value store ke liye toh usmai {} use karte hai taaki naye mai store ho ismai {} target hoga store hone ke liye aur baaki variables source hoge


const obj3 = {...obj1, ...obj2 }; //spread operator shared by both obj1 and obj2 is copied to obj3
// console.log(obj3,"obj3");


const users = [
    {
        id: 1,
        email: "obaid@.com",
        name: "obaid"
    },
    {
        id: 2,
        email: "obaid@.com",
        name: "obaid"
    },
    {
        id: 3,
        email: "obaid@.com",
        name: "obaid"
    },
]

users[1].email = "obaid12@gmail.com"; //users ke andar 2nd object ke email ko change karega
// console.log(users[1]);
//console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //tinderUser ke keys jo object keys hai usko araays mai store karke print karega

// console.log(Object.values(tinderUser)); //tinderUser ke values jo object values hai usko araays mai store karke print karega


// console.log(Object.entries(tinderUser)); //tinderUser ke entries jo object entries hai usko araays mai store karke print karega arrays ke andar har ek key value pair ko array ke andar store karega

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //hasOwnProperty se kisi variable ke andar koi key value hai kya nhi woh check karta hai

// console.log(tinderUser.constructor("isLoggedIn")); //constructor se kisi variable ke andar koi key value hai kya nhi woh check karta hai aur
//aur print karta hai usko aur uske type ko [String: 'isLoggedIn']


//-------------------------------------------

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "obaid",
}

// console.log(course.courseInstructor); 

//now we will going to deconstructure the course object

const {courseName, courseInstructor: instructor} = course; //deconstructuring is used to extract the values from the object and store them in variables iska matlab yeh hai ki const mai kaha se objects extract karni hai course variable mai toh CourseName aur courseInstructor ko extract karega jaise ki courseInstructor ki value hai "obaid" lekin naye course variable mai courseInstructor ko instructor mai store kiya gaya hai anh niche humne console mai courseInstructor ke jagaha instructore print kiya hai 
console.log(courseName, instructor);


//JSON = JavaScript Object Notation

// {

//     "courseName": "js in hindi",
//     "price": "999",
//     "courseInstructor": "obaid",
// }   //this is the json format in which all data is in strings format agar hum likhte hai toh object hume json format mai hi bhejna hota hai
