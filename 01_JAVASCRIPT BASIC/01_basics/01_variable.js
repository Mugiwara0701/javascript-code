const accountId = 14453     // const can't be changed in future

let accountEmail = "akshat@gmail.com"

/* var is not used because of scope problem 
prefer not to use var because of the issue in block scope and functional scope
*/
var accountPassword = "1234"

accountCity = "Dehradun"    // in javascript the variable can be declared without any keyword but it not a right way

let accountState   // it should give undefined

// accountId = 2   // not allowed
accountEmail = "nautiyal@gmail.com"
accountPassword = "121212121"

console.log(accountId);

// print in table format
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
