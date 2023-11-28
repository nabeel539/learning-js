// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);   
}

// nested loop 
for (let i = 0; i <=3; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=3; j++) {
    //    console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    }
}

// Looping through an Array

let myArray = ["Flash", "Batman", "Superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


// Break 

for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log("Detected 5");
        break    // when condition hits , it comes out from the loop.
    }
    console.log(`value of i is ${i}`);
}


// Continue

for (let i = 0; i <=20; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue    // when condition hits , it skips that loop Once.
    }
    console.log(`value of i is ${i}`);
}