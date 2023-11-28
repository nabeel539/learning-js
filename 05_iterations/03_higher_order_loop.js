const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const greetings = 'Hello World!'
for (const greet of greetings) {
    if (greet === " ") {
        continue;       // skip spaces....
    }
    console.log(greet);
}



// Maps
/* Map Object holds key-value pairs. 
    In holds Unique Value.
*/
const map1 = new Map();

map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
map1.set('d',4);
// Getting value from a Map
console.log(map1);          
console.log(map1.get('d')); // 4

// Iteratoring through a loop
for (const key of map1) {
    console.log(key);
}

// we can also de-Structure array
for (const [key,value] of map1) {
    console.log(key,':-',value);
}


// Not: Obj is not iterable by For-of , Other ways also avaliable
const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key,value] of myObj) {
    console.log(key,':-',value); // shows error 
}

