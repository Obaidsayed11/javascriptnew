const descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); //getOwnPropertyDescriptor isse hum kisi bhi object ya constant object ka description jaan skte hai jaise ki Math ki ek property hai PI Math.pi ki value 3.14 hoti hai constant value hai jo change nhi hoskti hai
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bani");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // ismai hum object chai ke andar ke property ka descriptor dekh skte hai yeh change writable hosakta hai kyuki yeh humne banaya hai abhi

// object ke andar aap properties ko define bhi karskte ho

Object.defineProperty(chai, "name", {
  // defineProperty isse hum khudka define karskte hai property of objects
  // writable : false,
  enumerable: true,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  // kyuki chai directly iterable nhi hai isliye object.entries use kiya iterable bananeke liye
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
