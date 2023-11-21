// Dates

let myDate = new Date()
console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());



// let myCreatedDate = new Date(2023,0,12) 
let myCreatedDate = new Date("01-13-23")   // Fri Jan 13 2023 in dateString
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 10 - gives current month
console.log(newDate.getDay()); // 2 - gives current day
console.log(newDate.getDate()); // 21 - gives current date