const myNum = [1,2,3]

// const newNum = myNum.reduce(function(acc,curved){
//     console.log(`acc ${acc} and curved ${curved}`);
    
//     return acc + curved
// }


// , 0)
const newNum = myNum.reduce((acc, cur)=> acc + cur, 0)

console.log(newNum);
