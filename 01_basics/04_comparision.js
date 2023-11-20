console.log(2 < 1)      // false


// Tricky ---
console.log("02" > 1)   // true


console.log(null > 0);  // false 
console.log(null == 0); // false
console.log(null >= 0); // true


// In JS == & ><>=<= (comparision operator) works differently.
// Comparistion convert null to a number, Treating it as 0. 


// Strickt Check
//  (===) is not only checks the value but also the datatype.
console.log("2" === 2); // false