//for loop

// in the above syntax let index = 0; is the variable declared , index < array.length; ismai condition check horahi hai , uske baad index++ index ko yeh badhaya jaata hai
//jaise iteration ka kaam hojayega jo loop directly index++ ispe nhi aa jata hai
// jaise condition check hoti hai waise  (const element = array[index];)  loop andar chala jaata hai uske baad bahar jump karde index ki value badha deta hai varna ek hi jagah reh jaaoge

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number"); //ismai first 5 aane se pehle yeh print hoga phir 5 print hoga iss if condition ka matlab yeh hai ki agar element 5 ke equal hai toh yeh print hoga
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value : ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value j : ${j} and inner loop value i : ${i}`); //isse loop ke andar loop hoga matlab i ke 0 value ke andar j dass baar print hoga phir i ke 1 value ke andar j dass baar print hoga and vice versa till 10
    // console.log(i + "*" + j + " = " + i*j); //this will print multiplication table of 1 to 10
  }
}

let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}

// break and continue


//break 

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`); // is condition mai agar loop mai 5 detect horaha hai toh yej detect karega print se pehle phir uss loop ko waha break kardega

//     break; //yaha break kardiya agar break nhi hota toh iske neeche ka code print hojata
//   }
//   console.log(`value of i is : ${index}`);
// }

//continue  in this iteration ko continue karaya jaata hai matlab condition mai aisa tha ki agar 5 detect hua toh print karo 5 detect hogaya hai upar 5 break mai hume 5 detect hua toh break karana tha lekin continue mai for first time first condition ke liye letgo kardete hai


for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`Detected 5`);

    continue;
  }
  // console.log(`value of i is : ${index}`);
}
