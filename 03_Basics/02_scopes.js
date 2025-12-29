// var c = 300
let a = 300

if(true){
    let a = 10 
    const b = 20  // the things written in curly brackets are block scopes and outside that it is called global scope
    c = 30
    console.log("INNER: ", a);
    
} //{} this is called scope, using if{} and if else{} the curly brackets are called scopes

console.log(a);
// console.log(b);
// console.log(c);

