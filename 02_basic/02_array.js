const marval_heroes = ["ironman" , "thor", "spiderman"]

const dc_heroes = ["batman" , "flash" , "superman"]

//when  we push an array it go to as a value 

// marval_heroes.push(dc_heroes) //it gives dc_heroes array inside the marval_heroes 
// console.log(marval_heroes);  //output =>  [ 'ironman', 'thor', 'spiderman', [ 'batman', 'flash', 'superman' ] ]

//agar hame array ke andar ke array se index value find karni ho to 

// console.log(marval_heroes[3][2]) //[3]is the array inside array and [2] is the index value of inside array


// console.log(marval_heroes[3][2]) => this is not a good practice


//concat method => it print the value of another array inside array


const all_heroes = marval_heroes.concat(dc_heroes)
// console.log(all_heroes)


//spread => also work like concat method  => [...array1 , ...array2,  etc]

const all_new_heroes = [...marval_heroes, ...dc_heroes]
// console.log(all_new_heroes)


//flat method => ye array ke andar ke array ke andar array sabko ek hi array mai daal deta hai 

const new_heros = [1,2,3,[5,6,7], 9,10,12,15 ,[98,65,357 , [90,53,45]]]

// console.log(new_heros.flat()) 

// flat() => simple array ke andar ke array tak value deta or array ke andar ek or array ho to use simple print kar deta hai 

//flat(infinity) => ye ek hi array mai sab array ki value de deta hai


// console.log(Array.isArray("vimal")) //this  is not an array so result become false 

//Array.from

// console.log(Array.from("vimal"))  //result=> ["v" , "i" , "m" ,"a", "l"]

//from method make an array of the string etc


//interesting and most important method

// console.log(Array.from({name: "vimal"})) //ye empty array deta hai ye ise direct access nhi kar sakta 


//Array.of() method => ye variables ko arrays ke andar daal deta hai

let score1 = 100
let score2 = 300
let score3 = 453

console.log(Array.of(score1, score2, score3)) //output => [100, 300, 453]



// another arrays method 

// Array.isArray method 
//Array.of method
//Array.from method











