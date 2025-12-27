// const tinderUser = new Object (). //singleton object  /// both shows the same result empty object
const tinderUser = {} //non - singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggesIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Rehman@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Abdul Rehman",
            lastname: "Ahmed"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = {...obj1,...obj2}
// const obj3 = Object.assign ({}, obj1, obj2) // '{}' curly paranthese that is called target in assign is used to lock the final outcome

// console.log(obj3);

const users = [
        { 
            id: 1 , 
            email: "R@gmail.com"
        },
        { 
            id: 1 , 
            email: "R@gmail.com"
        }

]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isLoggedIn'));


