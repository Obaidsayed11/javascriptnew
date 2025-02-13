//agar samjho ek function hai uske ander ek aur function call kiya gaya 
//  function obaid (){
//     callme()
//  }

// abh iss call me ke andar jo this hoga wohh kisko refer karega uske upar to ek khali fumnction hai 
// toh iss situation mai woh global execution contect ko refer karega
// window object ko refer karega (yeh browser mai)  window = {this = window}
//aur agar environment node ka hai uspe window object ko refer kaise karega uska access toh hai nhi toh ispe aapke paas empty object aata hai node = { }

function SetUsername(username){
    //complex DB Calls
    this.username = username;

}

function createUser(username, email, password){
    // SetUsername(username) // ismai yeh ismne uss function ka reference hi liya hai call nhi kiya hai
    SetUsername.call(this,username) // abh call method se call ho raha hai refrence hold hi horaha hai
    this.email = email
    this.password = password
}

const user = new createUser("obaid","obaid@gmail.com", "123")
console.log(user);

// call jo hai woh currect execution context kisi aur ko pass kardeta hai matlab upar wale this.username ki value niche wale mai jabh function call kiya hai usmai pass kardiya hai
