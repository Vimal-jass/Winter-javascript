// memory

// memory have 2 types 

// => stack memory:it is used in primitive datatype , ye copy value deta hai 


// => heap memory:it is used in non-primitive datatype , ye orginal value deta hai 


const username = "vimal kumar "

var anotherUsername = username
var anotherUsername = "rahul"

console.log(username , anotherUsername)

// stack memory mai orginal value ki copy jati hai 


const userOne = {
    name : "vimal" ,
    age : 19
}


const userTwo = userOne
userTwo.age = 37

console.log(userOne ,  userTwo)


//heap memory mai agar tum  kisi particular things ki value change kar rhe ho to orginal  value ki bhi value change ho jati hai


