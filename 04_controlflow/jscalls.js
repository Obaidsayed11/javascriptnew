/*

// javascript execution context

javacript mai kiss tarah se pre code ko execute kara jaata hai do parts mai divide kara jaata hai

javascript ka jabh bhi code banta hai to ek global banta hi hai 
{} --> Global execution context
.this variable ke andar uss execution context ko rakh diya jaat hai
sabka execution context alag hota hai
.this wndow object ko refer karta hai
//javascript ek single threaded language hoti hai uske andar sab  cheeze proces hoti hai


---function execution context---

--eval execution context-- jo ki ek property hoti hai global execution context ki


how javascript code executes 

1. memory creaion phase
  ismai variable and function create declare kie hai unke liye jagah allocate hoti hai unko execute nhi kiya jaata hai
2. execution phase
   ismai saarey execution + - saarey function ko execute karta hai


   example :

   let val1 = 10
   let val2 = 5
   function addNum(num1, num2){
       let total = num1 + num2
       return total
   }
       let result = addNum(val1, val2)
       let result2 = addNum(10,5)

   1 . Global --> this
   jo bhi code ho chahe woh kitna bhi bada ho kitna bhi chota ho wo global execution se run hotaa hai aur usko sabse pehle allocate kia jaata hai .this ke andar
   
   2. Memory Phase ---> 
   saare variable ko jama kiya jaata hai aur unko rakha jaata hai

   val --> undefined (first step yahi hota hai memor phase ke andar ki saaare variable se naam lete hai aur uske adar undefined rakhte hai)
   val --> undefined
   add num --> defination (function declare hi to kia ha execute thodi hua hai )
   result1 --> undefined
   result2 --> undefined 
   (first cycle)

3. execution Phase

   val1 = 10
   val2 = 5
   addNum --> abh kya hoga na result1 ke andar phirse addNum call hua hai toh uske liye phirse (new vriable env aur new execution thread banega yeh k alag sandbox banega) ---iska kaam hone ke baad yeh delete bhi hota hai agar iska kaam hogaya toh yeh delete hojayega
                                    |
                                    |
                                    |
                --------------------|-----------------------
                |                                           |
                Memory Phase                            execution context
                val1 = Undefined                        num 1 = 10
                val2 = Undefined                        num 2 = 5
                total = Undefined                       total = 15 (yeh jo total return hoga woh global execution context mai jaakr hoga)
                                                        result1 = 15
                                                        result2 = 12 (abh yeh result ke liye phirse env banega yeh k alag sandbox banega new variable env aur new execution thread banega)
                                                        (jismai naya memmor phase banega aur ek naa execution phase banega)



-------------------------------//call stack---------------------------------------------------------------------
ek memory hai uske andar kaise function kaise jayege kaise execute hoge aur kaise usse baha ayege

ismai saare methods ko global ke andar call karta hai phir uske kaam hone ke baad usko bahar bhejdeta hai

jaise ek one() function hai woh pehle call hoga phir remove hojayega

agar function ke andar function call hua hai jaise 

one ke andar two aur uske andar 3
to teeno saathmai jaege first one() phir two() phir three() lekin remove first konsa hoga toh ismai Lifo use hota hai LAST IN First Out (LIFO)




*/
