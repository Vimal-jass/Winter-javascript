// concatination  => Concatenation in programming refers to the process of joining or combining two or more strings (or other data types) together to form a single string. In JavaScript, string concatenation is typically done using the + operator or by using template literals.


const name = "vimal"
const age = 22


//string interpolation => String interpolation in JavaScript is a way to insert values into a string dynamically. It is commonly done using template literals, which are enclosed by backticks (`). Template literals allow you to embed expressions inside ${} placeholders.

// console.log(`my name is ${name} and right now i am young and my age is ${age}`)


//we can declare a variable of string like this 

const Name = new String("hello brother kiya haal hai ")

// console.log(Name.length)  //string ki length batata hai or ye 0 se start hati hai agar hamare pass kai sentense hai to usme space bhi length mai add hota hai

// console.log(Name.toUpperCase())  //letter ko uppercase mai change kar deta hai  

// console.log(Name.charAt(10))  //kis position pr kon sa letter hai ye charat() batata hai

// console.log(Name.indexOf("b"))  //ye  letter  ki position batata hai

const newString = Name.substring(0,13) //=> idhar -tiv value ko  use nhi kar sakte hai ,   ye inke between ki  value deta hai initial value  include hoti  hai last value  include nhi hoti hai   

// console.log(newString)  // => result come Hello  brother 

const anotherString = Name.slice(-8, 10)
// console.log(anotherString);  


const newName = "      vimal      "
// console.log(newName)
// console.log(newName.trim())  // blank space ko remove kar deta hai  

const url = "https://vimal.com/vimal%20Kumar"
// console.log(url.replace("%20" , "-"))  // ye value ko replace kar deta hua jaise ki %20 hai or final mai  isne iski jagaha - replace kar dia 

console.log(url.includes('hitesh'))  //ye batata hai ki ye variable mai available hai  ya nhi => inlcude 
console.log(url.includes("vimal"))

const tarun = "tarun-vimal-ka-dost-hai"

console.log(tarun.split("-"))


//include()
//replace()
// split 
// slice
// substring
// length
// toUpperCase
// toLowerCase
// indexof
// charAt 
// concatination

// basically all above methods use in the string this is very important so remaining method is available at mdn docs so read it. 











