class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User{      //extends matlab aap teacher ke andar user ki propertiess add karna chahrahe ho toh kaha extend horaha hai user pe toh matlabh yeh hai ki woh khud user ke function jo constructor hai ismai jayega
    constructor(username, email, password){
        super(username);  // aur super keyword ka matlab yeh hai ki apne aap jayega user ke andar wha this bhi apne aap set karega aur uske andar ki value yaha laakar dega 
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

const user = new Teacher("obaid", "obaid@.com","123")

user.addCourse()

const tea = new User("Masala")
tea.logMe()
// user.logMe()
console.log(user instanceof User ); // instanceof ek method hai check karne ke liye ki koi class instance hai kya usi se yeh bani hai 


