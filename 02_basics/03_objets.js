// singleton
// Object.create => constructor method and singleton

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Ajay",
    "full name":"Ajay Pradhan",
    [mySym]:"mykey1", //for use symbol datatype, first declare the variable and use [] to use symbol
    age:23,
    location:"noida",
    email:"pradhanajay14@gmail.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','Friday'],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //better way to access the value from object
// console.log(JsUser["full name"]); // in this condition we can't use console.log(JsUser.full name); this will not run
// console.log(JsUser[mySym]); //for symbol datatype we don't put it in ""

JsUser.email ="ajay.pradhan@gmail.com" // to change the value
// Object.freeze(JsUser)  // freeze the value after this line if we do any alternation value will not change, it wont give any error but value will not change
JsUser.email = "pradhan.ajay@gamil.cp,"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());