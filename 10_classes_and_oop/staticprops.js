class User {
    constructor(username){
this.username = username

    }
    logMe(){
        console.log(`username : ${this.username}`);
        
    }

   static createId(){   // static se yeh hoga ki yeh static ye karta hai ki uss method ya properti=y ko access sabko dene se rok deta hai
        return `123`
    }
}

const obaid = new User ("obaid")
// console.log(obaid.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }


}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()