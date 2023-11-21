const accountId = 12345
let accountEmail = "ajay@test.com"
var accountPassword = "pass@123#"
accountCity = "Noida"
let accountState;

// accountId = 122 // not allowed

accountEmail = "ap@test.com"
accountPassword = "54321"
accountCity = "Odisha"


// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* 
Prefer not to use var becausae of issue in block and fucntional scope
*/