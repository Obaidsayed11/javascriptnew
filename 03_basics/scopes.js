{
} //scope

//var c = 10; //this is the global variable
let a = 10;
if (true) {
  let a = 20;
  const b = 10;
  var c = 30;
  // console.log("INNER", a); //yeh block scope ki value ko dikhayega only bahar ki nhi
} // this is the block variable ...scope ke andar jo value hoti hai woh block ke bahar nhi jaani chahiye

// console.log(a);
// console.log(b);
// console.log(c);

// ismai pehle function one banaye aur ek variable declare kiye then one ke andar ek aur function two..two ke andar ek variable declare kiye aur usami function one aur two dono ke variable console  kiye (function ke andar wala function apne parent function ka variable leskta hai)
function one() {
  const username = "obaid";

  function two() {
    const website = "youtube";
    // console.log(username);
    // console.log(website);
  }

   two(); //isko two ke bahar call kiya hai lekin iske andar function one ko call kiya hai agar isko comment kardie to one bhi console nhi hoga
}
one(); //isko one ke bahar call kiya hai

if (true) {
  const username = "obaid";
  if (username == "obaid") {
    const website = "youtube";
    console.log(username + " " + website);
  }
  // console.log(website); //this cant console bcz yeh blok ke bahar hai
}
// console.log(username); //this also  console kyuki yeh bhi 1st

//=====================================intrsting


addone(5);
// console.log(addone(5)); //isko declaraion se pehle use karskte hai
function addone(num) {
  return num + 1;
} // ismai yeh run hojayega aur 6 return bhi karega


//----------------------isko declaration se pehle nhi use kareskte|>

// addtwo(5) //ismai decleration se pehle isko use nhi karskte
const addtwo = function (num) {
  //yeh bhi function hai kabho kabhi isse expression bhi bolte hai
  return num + 2;
}; //ismai yeh nhi hoga kyuki addtwo declare karne ke sath sath variable mai hold bhi kardiya hai

// addtwo(5)
console.log(addtwo(5));
