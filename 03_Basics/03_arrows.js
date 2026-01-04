const user ={
    username: "Rehman",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
        
    }

}
// user.welcomeMessage()
// user.username = "Abdul"
// user.welcomeMessage()

// console.log(this); // empty object 

// function chai(){
//     let username = "Rehman"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Rehman"
//    console.log(this.username);
// }
// chai()

const chai = () => {                            //=> arrow function
  let username = "Rehman"
   console.log(this.username);
 }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4))


// const addtwo = (num1,num2) => num1 + num2
//  const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username: "Rehman"})


// console.log(addtwo(3,4))

const myArray = [1,2,3,4,5]

// myArray.forEach(()=>{})