const form = document.querySelector('form');
//addEventListener hum kisi bhi action perform karne pehle use karete hai jaise ki click submit
//preventDefault se hold karta h koi bhi action ko kahi submit mat karo

//const height = parseint(document.querySelector('height').value) this will give you empty value kyuki yeh page reload mai empty data input se lega jo ki fill nhi hua hai usko function ke andar hi declare karna chahiye

form.addEventListener('submit', function(e){
    e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results')

if (height === '' || height < 0 || isNaN(height) ) {
    results.innerHTML = 'please give a valid height';
}else if (weight === '' || weight < 0 || isNaN(weight) ) {
    results.innerHTML = 'please give a valid weight';
}
else{
   const BMI = (weight / ((height*height)/10000)).toFixed(2)
   //show the results
   results.innerHTML = `Your BMI is ${BMI}`
if (BMI < 18.5) {
    results.innerHTML = `you are under weight ${BMI}`
   }
}
});

// agar hum yeh variable bahar hi declare kardiye hote const height = parseint(document.querySelector('height').value)
// to page reload ke time woh input empty hoga toh woh empty data uss input mai store hoga uske baad jab hum submit click karge toh phir uss input ka data phir usmai jaaakr store hoga issse time complexity badhti hai toh upar declare karna event ke baad ke variable ko yeh ek sahi practice nhi hai
