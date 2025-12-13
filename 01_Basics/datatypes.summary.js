// # Primitive 

//  7 types : String, Number, Boolearn, Null (empty), undefined, Symbol, BihInt

const score = 100
const scoreValue = 100.3

const isLoggesIn = false
const outsideTemp = null
let userEmail
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34567654567678678n 




//  Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Rehman",
    age: 22,
}

const myFunction = function (){console.log("Hello World");}

// console.log(typeof outsideTemp);






// Return type of variables in JavaScript


// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// ********************************************

// Stack (Primitive), Heap (Non-Premitive)
 

let myYoutubename = "Pixelversegaming"

let anothername = myYoutubename

anothername = "WOW facts"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Rehman@google.com"

console.log(userOne.email);
console.log(userTwo.email);

