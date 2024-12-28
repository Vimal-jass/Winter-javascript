const accountId = 1234
let  accountHolder = "vimal"
var email = "vneeclasses@gamil.com"
let accountPassword;  //result is undefined 

// accountId = 21323  //Not Allowed 01
accountHolder = "rahul"
email = "vimal@gmail.com"

{
    //this is called scope
}

//we use let bgz of scope problem at the  place of var 

/*

prefer not to  use var 
because of issue in block scope and functional scope

*/

console.log(accountId)
console.table([accountHolder , accountId , email , accountPassword])
console.log("hello vimal")