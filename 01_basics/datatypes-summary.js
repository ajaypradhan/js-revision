/*
Primitive :call by value

=> String
=> Number
=> Boolean
=> null
=> undefined
=> symbol
=> BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/*
Non Primitive : call by refrence

=> Array
=> Objects
=> Function
*/


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  Heap(Non-Primitive)

let testData = "Ajay Pradhan"

let anotherData = testData
anotherData = "Pradhan Ajay"

console.log(testData)
console.log(anotherData)

let userOne ={
    email:"ajaypradhan@gmail.com",
    upi:"ajaypradhan"
}


let userTwo=userOne

userTwo.email = "pradhanajay@gmail.com"

console.log(userOne)
console.log(userTwo)