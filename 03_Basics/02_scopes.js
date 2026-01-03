// var c = 300
let a = 300

if(true){
    let a = 10 
    const b = 20  // the things written in curly brackets are block scopes and outside that it is called global scope
    c = 30
    // console.log("INNER: ", a);
    
} //{} this is called scope, using if{} and if else{} the curly brackets are called scopes

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rehman"
    function two(){
        const website = "Hitesh"
        console.log(username);
        
    }
    // console.log(website)
     two()
}
// one()

if(true){
    const username = "Rehman"
    if(username === "Rehman"){
        const website = " youtube"
        // console.log(username + website);
        

    }
    // console.log(website); /error
    
}
// console.log(username); // error

//+++++++++ interesting ++++++++++

addone(5)
function addone (num){
    return num + 1
}

addTwo(5)         
const addTwo = function (num){
    return num + 2 

}
