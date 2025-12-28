function sayMyName (){
    console.log("R");
    console.log("E");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("N");
    
}
// sayMyName()


function addTwoNumbers (number1, number2) {
    console.log(number1 + number2);
    
}
function addTwoNumbers (number1, number2) {
//    let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(3, 4) 
// addTwoNumbers(3,"4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)
const result = addTwoNumbers(3,5)
// console.log("Result: ", result)

function loginUserMessage(username){
    if(!username){                  // can use (username === undefined) "!" is used to convert fasle-tru and vise versa
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in `

}
// console.log(loginUserMessage("Rehman"))
console.log(loginUserMessage());
