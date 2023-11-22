const marvel_hero = ["Ironman","Hulk","Spiderman"]
const dc_hero = ["Badman","Superman", "flash"]


//push()
marvel_hero.push(dc_hero);
console.log(marvel_hero);       // ["Ironman","Hulk","Spiderman", ["Badman","Superman", "flash"]]
console.log(marvel_hero[3][2]); // flash



// Concate()
const all_heros = marvel_hero.concat(dc_hero); // returns a new array.
console.log(all_heros); // ["Ironman","Hulk","Spiderman", "Badman","Superman", "flash"]


// Spreade method
const all_new_hero = [...marvel_hero,...dc_hero];
console.log(all_heros); // output is same as concate



// flat(Infinity) - return simple array  
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



// Checking is it an array
console.log(Array.isArray("Nabeel"));       // false
console.log(Array.isArray(["asde","abc"])); // true
// Converting to Array
console.log(Array.from("NABEEL"));          // ['N','A','B','E','E','L']


// Note :- we have to tell which one to convert into array  explicitly 
console.log(Array.from({name:"Nabeel"}));   // []


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));