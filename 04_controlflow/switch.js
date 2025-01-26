
//switch kyu execute karte hai

 //ek value ko multiple condition se check karni ho to switch case use karte hai

 //switch case ka syntax
 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = 10

switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break; //agar hum yeh break comment karde to iske baad  ka saara ka saara code execute karta hai except default
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("default case");
        
        break;
}