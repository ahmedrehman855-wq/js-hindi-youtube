//singleton 
// Object.create
//object literals 
const mySym = Symbol("Key1")

const JsUser = {
        name: "Rehman",
        [mySym]: "mykey1", // must to put '[]' to change from string to symbol 
        age: 18,
        location: "Jaipur",
        email: "Rehman@google.com",
        isLoggesIn: false,
        lastLoginDays: ["Monday", "Saturday"]
    

}

// console.log(JsUser.email) // can't access when the email is written in string(" ") in object argument
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "Rehman@chatgpt.com"
// Object.freeze (JsUser) // if you don't want anyone to change email use freeze
JsUser.email = "Rehman@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    

}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
    

}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








