// getter aur setters isliye dete  hai kyuki agar samjho mujhe email aur password ka access dena hi nhi chate toh hume uske badle kya dikhana hai kya get karke aur use set karke dikhana hai hum sirf usey get nhi karskte set bhi karna hoga
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password; //yaha par values set horahi hai har class ya objexts mai properties set hoti hi hai par hume externally set karna hai toh getters aur settes dikhana hoga nhi toh default behavior mai hi rahega
  }
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return ` ${this._password}`;
  }
  set password(value) {
    this._password = value;
  }
}

const obaid = new User("obaid@gmail.com", "abc");
console.log(obaid.password);
console.log(obaid.email);
