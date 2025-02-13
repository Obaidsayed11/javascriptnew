function User(email , password){
    this._email = email
    this._password = password


    // pehle ke time par kaise getter aur setters hote the abh hai lekin class hai isliye
    // defineProperty se hote the

    //yeh ek function based getters aur setters hai
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })

    
}

const chai = new User("obaid@.com", "bhakk")
console.log(chai.email, chai.password);
