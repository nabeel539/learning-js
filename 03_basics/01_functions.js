// Functions


// Parameters are when creating a function
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

addTwoNumbers(3,8);     // 11
// Arguments, when calling a function


function addTwoNum(num1,num2){
   let result = num1 + num2
   console.log("Result: ",result);
}

addTwoNum(2,3);     // Result: 5


// return k baad koi v code execute nahi hota ....
function addTwo(num1,num2){
    let result = num1 + num2;
    return result;
    console.log(result);  // unreachable Code...
}


function loginUserMsg(username){
    if (username === undefined) { // if(!username) {...}
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}

console.log(loginUserMsg("Md Nabeel Ahemad,")); // Md Nabeel Ahemad, just logged in

console.log(loginUserMsg());                    // undefined just logged in


// We can also give default value...
function loginUserMsg(username = "Nabeel"){
    if (username === undefined) { // if(!username) {...}
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}



// Rest Operator - For allowing dynamic parameter
function calculateCartPrice(...price){
    return price
}

console.log(calculateCartPrice(2000, 300, 10000, 200));  // [2000, 300, 10000, 200]


function cartPrice(p1,p2,...price){
    return price
}

console.log(cartPrice(2000, 300, 10000, 200));  // [10000, 200]



// Passing a Object

let user = {
    username : "Nabeel",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    username : "Pushkar123",
    price: 399
})


// Passing an Arrays...

const myArray = [200, 400, 100, 600]

function returnSecValue(getArray){
    return getArray[2];
}

console.log(returnSecValue(myArray));   // 100