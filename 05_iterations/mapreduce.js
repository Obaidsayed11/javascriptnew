const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// });

// console.log(values); 

//ismai dekha hai ki for each ko ek variable ke andar store kiya aur phir uss variable ko log karke dekha toh malum hua ki forEach kuch values return hi nhi karta hai jo ki undefined aati hai
//filter bhi apne andar ek callback hi leta hai
//filter values return karta hai foreach nhi karta 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4 )  //filter ka syntax jabh bhi hum filter use karte hai toh filter ke andar hume ek call back function milega ((num) => ) ywh hai call back function  uske baad ek condition dege (num > 4) jo bhi uss condition se satisfy hoga woh values return ki jayegi baaki nhi ki jayegi
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => {  // is wale mai humne {}  ke andar pass kiya hai toh yeh explicit hai to return use karege
//     return num > 4 

// }) 
// console.log(newNums);

// upar wali cheez agar hum for each mai use karte toh kaisa hota


    // const newNums = []
    // myNums.forEach((num) => {
    //     if (num > 4) {
    //         newNums.push(num)
            
    //     }
        
    // })
    // console.log(newNums);

// more of filters
//books ka array uske andar objects
    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    

// const userBooks = books.filter((bk) => bk.genre ==='History') //ismai humne fikter use kiya data mai se filter karne ke liye condition jo hai usko filter karke bheje 
const userBooks = books.filter((bk) => {
   return bk.publish >='1990' && bk.genre ==='History' // is waale example mai humne {} scope ke andar consition check ki toh return karna hoga aur hume do condition check karni hai dono check karta hai dono hona chaiye 
})



// console.log(userBooks);

//---------------------------------------------------------------------------------------------------------------------------------------------

//map callback function

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums);

// const newNums = []
// myNumbers.forEach((num => {
//     newNums.push(num + 10)
// }))
// console.log(newNums); // igar mujhe same foreach mai karna hai toh mujhe naye variable banakar usko empty rakhna hoga phir myNumbers pe forEach lagakar usmai newNums.push(num + 10) push karna hoga kyuki foreach mai value return  nhi karta 



/// filter mai automatically filter kardeta hai lekin in maps mai sabh patrait karega hi karega aap uske hisaab se consitional checks returns laga skte hai map mai zaruri nhi ki condition true ho tabhi return karega woh sabh filter mai hota hai

// reducer callback function

//accumulator is a variable which is used to store the result of the function call matlab ki ek empty variable hota hai


const myNums = [1,2,3]

// ismai neeche reduce function use hua hai jismai do params diya jaata hai accumulator jo ki 1st intance mai initial value jo hoti hai usko leta hai kyuki woh ek empty variable hota hai 
// currentvalue main variable mai se leta hai iss case mai yeh hai [1,2,3] values
// 1st iteration mai accumulator = 1 , currentValue = 1 abh 2nd iteration mai accumulator abh initial value se nhi lega woh returned value ko as accumulator mai lega phir wahi iteration chalega

// myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator ${accumulator} currentValue ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)

// console.log(myTotal);

// const myTotal = myNums.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0)
// console.log(myTotal);


const shoppingCart = [
    { product: "banana", price: 2 },
    { product: "mango", price: 3 },
    { product: "apple", price: 4 },
    { product: "orange", price: 5 },
  ];
  

const myTotal  = shoppingCart.reduce((accumulator,item)=> ( item.price + accumulator) ,0)


console.log(myTotal);

