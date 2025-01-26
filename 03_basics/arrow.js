const user = {
  username: "obaid",
  price: 199,
  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to our website`); // abhi hume current context ko refer karna hai toh {}function ke andar toh this keword ko use karege aur arrow function ke andar this nhi hota
    // console.log(this);
  },
};

// user.welcomeMessage();
user.username = "hitesh";  //here changed the context of the username so the value will be changed
user.welcomeMessage();
// console.log(this);

//browser ke andr jo global object hai woh window object hai click hai submit hai

// function obaid(){
//     let username ="obaid"
//  console.log(this.username); //ismai hum aise function ke andar aake this use nhi karskte hai

// }
// obaid()

// const obaid = function () {
//     let username = "obaid";
//     console.log(this.username);

// }
// obaid() //yeh ismai undefined batayega

const obaid = () =>{
    let username = "obaid";
    // console.log(this);

}
obaid() //yeh ismai undefined batayega

// const addTwo1 = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo1(2, 3)); //example of basic arrow function

//niche implicit return ka example hai usmai paranthesis nhi use karte hai agar ek hi line ka statement hai toh yeh use karskte hai

const addTwo1 = (num1, num2) => num1 + num2 //aise use kaerskte hai implicit return ke liye
// console.log(addTwo1(2, 3));


//ek aur tarika hai use karne ka

// const addTwo = (num1, num2) =>(num1 + num2) //hum implicit mai parenthesis bhi use karskte hai agar curly parenthesis mai use karte toh return use karna padhta tha

// console.log(addTwo(2, 3));

const addTwo = (num1, num2) => ({ username: "obaid" });

// console.log(addTwo(2, 3)); //agar object lena hai toh usko bhi parenthesis mai lenge uske andar object
