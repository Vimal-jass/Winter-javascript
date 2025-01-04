// datatypes have 2 types  : aap memory mai data ko kis tarikey se store kar sakte hai => primitive and non primitve

// 1. is  primitive / call by value=> 7 catogories => string,number , boolean , empty(null ), undefined  , symbol ,  BigInt 
//2.  is non-promitive or reference type => object , array , functions  


//symbol  => unique things  ke lie  banaye gaya hai , security purpose 
//ek jaise content ko ham same pass karenge phir bhi inki value same nhi milegi 
//=> check the below code we have 2 same value  but result become false 

// const id = Symbol("1234")
// const anotherId = Symbol("1234")

// console.log(id === anotherId)


//non primitive => object : ["cvimal" , "rahul"] , function : function(){} , object = {} 

//function ka datatype object funtion hota  hai 
//null ka datatype object hota hai 
//object ka datatype object hi hota hai check with below code 

// const vimal = ["rahul"]
// console.log(typeof  vimal)

 



