const clock = document.getElementById('clock')

let date = new Date()
console.log(date.toLocaleTimeString());


setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString());
// clock.innerText = date.toLocaleTimeString()
}, 1000) //setInterval yeh ek method hai javascript ka jismai hum ek interval de sakte hai kisi bhi function ka ki hume yeh itne time pe baar baar run karwana hai