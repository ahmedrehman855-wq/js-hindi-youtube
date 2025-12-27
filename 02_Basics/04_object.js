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

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('isLoggedIn'));

const course ={
        course: "js in Hindi",
        price: "999",
        courseInstructor: "hitesh"

}
// course.courseInstructor // can be used but not a good form 

// const {courseInstructor: instructor} = course // const equal to the name of the extraction 
// console.log(instructor);  // we can change name of courseInstructor if the name is too long to read

// const navbar = ({company}) => {

// }

// { "name": "Rehman",
//     "price": "Free",
//     "coursename": "js in hindi"


// }   //this is called jsan, we won't give any specific name for this object should have name 
// // in jsan the keys and values should be in string (" ")

