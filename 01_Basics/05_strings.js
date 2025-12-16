const name = "Rehman"
const repoCount = 50 

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Rehm-an-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "    Rehman   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rehman.com/rehman%20ahmed"

console.log(url.replace( '%20','-'));

console.log(url.includes ('sundar'));

console.log(gameName.split('-'));












