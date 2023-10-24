const accountId = 5678
let accountEmail = "mdnabeel@gmail.com"
var accountPassword = "Safique@45367"
accountCity = "jaipur"
let accountState

// accountId = 123  // NOT ALLOWED
accountCity = "Hydrabad"

/*  Note :-----
    1. Please Donot use var Bcz of issue in block scope & Functional scope.
    2. If any variable is not initialised ... In Js it's undefined. 
*/
console.log(accountId);
console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountState])