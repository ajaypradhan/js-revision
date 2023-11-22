const name = "Ajay Pradhan"
const repoCount = 40

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and i have ${repoCount} repo in github`);

const stringName = new String("stringValue")

console.log(stringName[0]);

console.log(stringName.__proto__);

console.log(stringName.toUpperCase());
console.log(stringName.charAt(2));
console.log(stringName.indexOf('t'));

const newString = stringName.substring(0,4)
console.log(newString);

const anotherString = stringName.slice(-8,4)
console.log(anotherString);

const newStringOne = "      Ajay       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ajay.design/ajay%20pradhan"
console.log(url.replace('%20','-'));
