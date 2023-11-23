// global scope
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    var c = 30 ;        //var  is accessible from outside the code block.

    console.log(a); // 10 (Block Scope)
}

console.log(a);     // 300
// console.log(b); 
console.log(c);



// Eg....
function one(){
    const username = "Nabeel"

    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);   // Error - Not within the scope
    two();
}

one();


// +++++++++ Interesting ++++++++++++

// 1. Normal Function 
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));     // 6

// 2. Expression
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(6));     // 8