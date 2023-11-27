const temperature = 41

if (temperature === 40) { // false
    console.log("temperature less than 50");  // not execute
} else {
    console.log("temperature is greater than 50"); // executed 
}

console.log("Execute....."); // always exexuted


//implesite Scope (Donnot Good practice)
const balance = 10000
if(balance> 500) console.log(`You have ${balance} rupees...`);

// Nested If- Else
if (balance < 500) {
    console.log("less than 500");
} else if( balance < 9000){
    console.log("less than 9000");
} else {
    console.log("Don't have Idea...");
}

// && - both left and right condition should be true.

// || - one of the left or right should be true

