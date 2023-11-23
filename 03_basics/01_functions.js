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