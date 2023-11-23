
// Singleton Object
const tinderUser1 = new Object()

// Using Object Literals
const tinderUser2 = {}

console.log("singleton: ",tinderUser1);
console.log("Object Literals: ",tinderUser2);

tinderUser2.id = "123abc"
tinderUser2.name = "Nabeel"
tinderUser2.isLoggedIn = false

console.log(tinderUser2);



const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',6:'f'}


// combine two or more object
// const obj4 = Object.assign({},obj1,obj2,obj3);

const obj4 = {...obj1,...obj2,...obj3} // Spread 
console.log(obj4);

console.log(tinderUser2);

console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(Object.entries(tinderUser2));


console.log(tinderUser2.hasOwnProperty('isLoggedIn'));