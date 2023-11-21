const score = 400
console.log(score); // 400

const balance = new Number(200)
console.log(balance); // [Number: 200] Explicitly declare

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2));        // 200.00 usually used in 0.121345423435 (while building E-commerce Application / Tax calculation)

const otherNumber = 123.845
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 - According to US standard
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// ++++++++++++++++++ Maths ++++++++++++++++++

console.log(Math.abs(-4)); // 4 - Returns +ve 
console.log(Math.round(2.6)); // 3 - roundup the value 

console.log(Math.ceil(4.2));  // 5 - takes ceiling value 
console.log(Math.floor(5.6)); // 5 - takes floor value

console.log(Math.min(1,4,8,6,8,10)); // 1 - gives min value of an array

console.log(Math.max(2,34, 123,23,1));// 123 - gives max value of an array

console.log(Math.random());            // alway gives random values between (0-1)
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//* Formula 
console.log(Math.floor(Math.random()*(max - min + 1)) + min ) // value > min 



