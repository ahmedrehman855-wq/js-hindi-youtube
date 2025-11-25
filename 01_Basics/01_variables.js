const accountId = 14456
let accountEmail= "ahmedrehman556@gmail.com"
var accountPassword= "12345"
accountCity= "Hyderabad"

// accountId= 2 // not allowed
accountEmail= "hc@hc.com"
accountPassword= "212121"
accountCity= "Jaipur"
console.log(accountId);
let accountState;

/*
Prefer not to use var
Because of issue in block scope and funcational scope 

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
