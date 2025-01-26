const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// in chaining ismai dekhe jaise ki ek array ko pehle map karke uske andar * 10 add kiya 
// phir usko phirse map kiya gaya ismai jo values ayegi woh iske parent methods ki ayegi iske upar wala method uski

const newNums =  myNumbers
                .map((num) => num * 10)  
                .map((num) => num + 1)
                .filter((num) => num >= 40)                                                                                      
                 console.log(newNums);
                 