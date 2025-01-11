const score = 100
// console.log(score)

const balance = new Number(2000)  // new keyword change it in an object
// console.log(balance)


//toString()

// console.log(balance.toString())  //number changed in string
// console.log(balance.toString().length) //length of string


//toFixed() => return string


// console.log(balance.toFixed(2))
// console.log(typeof balance.toFixed(2)) //it make decimal value with two digit after decimal and it is string not number


//toPrecision => return string , toPrecision means approximate value 

const otherNumber = 89.853 //result 90 in this case 

// console.log(otherNumber.toPrecision(2))



//toLocaleString() method => it return string, it is used to giving "," between 0 like 1,000,000 like this 

const hundreds = 1000000000; 

// console.log(hundreds.toLocaleString("en-In"))  //en-In is the indian mathmatical value  



// ++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++



// console.log(Math);  //math is an object and it have many properties related to math

// console.log(Math.PI) //here we see a pi  value that is 3.14

// console.log(Math.PI.toFixed(2))  //just for knowledge purpose i used it



// abs- absolute value it reject "-" sign from the  value 

// console.log(Math.abs(-5))  //result  5



//Math.round => approximate value 

// console.log(Math.round(89.83))  //result 90 approximately 



//ceil and floor is also used for approximate  value but we mostly use "round"


//to find minimum and maximum value in an array see the below code 

// console.log(Math.min(7,3,4,5,67,34,768,66338))  //minimum value is 3 
// console.log(Math.max(7,3,4,5,67,34,768,66338)) //maximum value is 66338




//Math.random() method => it is used most of time in the production level

//random means it gives difference value when you run again and again 

//random value lie between "0" and "1" and 0 and 1 also lie in 

console.log((Math.random()*10) +1) // "0" will not come bcz we add 1 


// Ques: find the min and max value between 10 and 20 with approximate value

const min = 10;
const max = 20;


//           most important formula to find min and max value
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





 


