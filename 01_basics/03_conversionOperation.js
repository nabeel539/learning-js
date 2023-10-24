let score = "33avc"
let score1 = null
let score2 = undefined
let score3 = true

console.log(typeof(score))

let valueNumber = Number(score)
console.log(typeof(valueNumber))// number
console.log(valueNumber);       // NaN


let valueNumber1 = Number(score1)
console.log(typeof(valueNumber1))// number
console.log(valueNumber1);       // 0


let valueNumber2 = Number(score2)
console.log(typeof(valueNumber2))// number
console.log(valueNumber2);       // NaN


let valueNumber3 = Number(score3)
console.log(typeof(valueNumber3))// number
console.log(valueNumber3);       // 1


// "333"    => 33
// "33avb"  => NaN
// true     => 1; false => 0


let isLoggedIn = 1
console.log(typeof(isLoggedIn)); // number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  // true

let str = "Nabeel"
let str1 = Boolean(str)
console.log(str1); // true


// 1 => true , 0 => false
// "" => false
// "nabeel" => true