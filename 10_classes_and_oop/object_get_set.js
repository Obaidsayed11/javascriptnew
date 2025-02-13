//yeh ek object base getter and setter

const User = {
    _email : 'h@gmail.com',  //yaha _ ka matlab yeh hota hai ki yeh ek private property ke andar aata hai
    _password : 'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

// hum abh factory function joki create hai Object.create yeh arrays mai bhi hote hai
const tea = Object.create(User) //ismai yeh horaha haina pehle toh iismai null value rehti hai abh usmai aap yeh karo ki aap user ki base par ek object create karo aur usko tea ke andar refer karo
console.log(tea.email);


// getter aur setter mai jo properties hoti hai woh ek method type hi hota hai but behind the scenes uske upar rakh raha hu ki actualyy mai memory mai se value lekar aarahe ho aur dekar aarahe ho get jo hai woh ek special method hai jo aapke property pe kaam karraha hai exaple mai email bhale se aapne property pehle private rakh rakhe ho get memory se leakr aayega woh _ hai kuch bhi hai use farq nhi paadhta




