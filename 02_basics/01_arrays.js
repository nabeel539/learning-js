// Array
/* an array is a data structure used to store a collection of elements. These elements can be of any data type—numbers, strings, objects, other arrays, etc. 
- zero based indexing.
- 
*/

// While coping creates shallow copy :- (Call by References) -> Array

// Creating an Array...
// 1. Empty array
let myArr = [];

//2. Array with Elements
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let fruits = ['Apple', 'Banana', 'Orange']; // Array of strings



let mixedArray = [1, 'hello', true, { key: 'value' }]; // Mixed data types in an array

// 3. Using the Array Constructor:
let newArray = new Array(); // Creating an empty array

let newArrayWithSize = new Array(5); // Creating an array with length 5



// Accessing Array
console.log(fruits[0]);     // Apple

// Modifying Array
// a) push() - this  method adds new items to the end of an array
fruits.push('Kiwi');
console.log(fruits); // ['Apple', 'Banana', 'Orange', 'Kiwi']

// b) pop() - this method remove last element from the end of an array
fruits.pop()
console.log(fruits); //  ['Apple', 'Banana', 'Orange']

// c) shift() - removes the element at the zeroth index
fruits.shift()
console.log(fruits); //  [ 'Banana', 'Orange'];

// d) unshift() - add one or more elements to the beginning of the given array
fruits.unshift('Apple')
console.log(fruits); // ['Apple', 'Banana', 'Orange'];

// e) join() - returns an array as a string. It doesnot change the Original array. 
const newArray1 = fruits.join()
console.log(fruits);    //  ['Apple', 'Banana', 'Orange']
console.log(newArray1); //  Apple,Banana,Orange

// f) slice() - It returns sub array. It doesnot change Original Array.

// g) ** splice() - It returns sub array. It changes original Array.
const myArray2 = new Array(1,2,3,4,5,6)
console.log("Original",myArray2);

const myArray3 = myArray2.slice(1,4);
console.log("slice array",myArray3);
console.log("Original",myArray2);

const myArray4 = myArray2.splice(1,4);
console.log("splice array", myArray4);
console.log("Original",myArray2);
