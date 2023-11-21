const name = "Nabeel"
const repoCount = 50

// Older way - String concatinations...
console.log("My name is "+name+ "& my repo count is "+repoCount);


// New way - String Interpolation...
console.log(`My name is ${name} & my repo count is ${repoCount}`);


// Declaring a String
const gameName = new String("LastBlood539")
console.log(typeof(gameName))       // object
console.log(gameName.length)        // 12
console.log(gameName[0])            // L

console.log(gameName.__proto__);     // {}
console.log(gameName.toUpperCase()); // Original value Doesnot Change (Primitive)

console.log(gameName.charAt(6));    // o
console.log(gameName.indexOf('l')); // 5

const newStr = gameName.substring(0,4);
console.log(newStr);                // Last

const anotherStr = gameName.slice(-10, -6);  // it allows -ve input
console.log(anotherStr);            // stBl


const newStringOne = "     Nabeel     "
console.log(newStringOne)                        
console.log(newStringOne.trim());     // It removes all the extra spaces.


const url = "https://nabeelahemad.com/nabeel%20md";
console.log(url.replace('%20','-'));    // Replace the Specified String 

console.log(url.includes('nabeel'));    // (false) Search for perticular string 

console.log(url.split('/'));            // [ 'https:', '', 'nabeelahemad.com', 'nabeel%20md' ]