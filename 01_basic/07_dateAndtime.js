//Dates and time

const myDate = new Date()
// console.log(myDate);  //2025-01-11T13:24:41.384Z it is not readable 
// console.log(myDate.toString()) //Sat Jan 11 2025 13:28:26 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Sat Jan 11 2025
// console.log(myDate.toLocaleString())  //1/11/2025, 1:28:26 PM
// console.log(typeof myDate)  //typeof Date is "Object"

const myCreateDate = new Date(2023, 0,23)
// console.log(myCreateDate.toDateString())  
// console.log(myCreateDate.toLocaleString())


const MyCreateDate = new Date(2023-0-23)  
// console.log(MyCreateDate.toLocaleString()) 


// timeStamp => is used in airlines time find between two given times

let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/1000))

//to get month => .getMonth , to get dat => .getDay , 

const month = new Date();
console.log(month)
console.log(month.getMonth())



