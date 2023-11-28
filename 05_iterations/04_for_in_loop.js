// For in Loop 

const myObj = {
    js  : "JavaScript",
    css : "StyleSheet",
    java : "Java",
    cpp : "C++",
    swift : "Swift by Apple" 
}

for (const key in myObj) {
    // console.log(key);
    //console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


const programming = ['js','rb', 'py', 'java','cpp']

for (const key in programming) {
   console.log(key);                // returns key 
   console.log(programming[key]);   // values of array
}

// Note :- Map is not  iterable by for-in . It uses for-of