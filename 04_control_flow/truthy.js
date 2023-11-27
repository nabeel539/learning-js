
// let userEmail = "nabeel@123gmail.com"
// let userEmail = ""
let userEmail = []

if (userEmail) {
    console.log("Got User Email...")
} else {
    console.log("Does not got User Email...");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values

// "0" , "false", " " , [] , {}, function(){}



// How to Check Empty

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}



// Nullish Coalescing operator (??)

let val1 ;
let val2 ;
let val3 ;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 11 ?? 12

console.log(val1);  // 5
console.log(val2);  // 10
console.log(val3);  // 15
console.log(val4);  // 11



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");