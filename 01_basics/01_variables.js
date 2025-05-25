const accountId = 144553
let accountEmail = "email@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
/*
Prefer not to use var instead us let 
because of the issue in block scope and functional scope
*/
//accountId = 2  //not allowed
accountEmail = "Changeemail@gmail.com"
accountPassword = "Change12345"
accountCity = "ChangeMumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])