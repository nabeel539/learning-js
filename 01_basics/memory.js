// 1.Stack (Premitive) - Call by Value...

let myName = "Nabeel"

let anothername = myName
anothername = "mrX"

console.log(myName);        // Nabeel
console.log(anothername);   // mrX

// Note :- The Original value of the variable doesnot change.



// 2. Heap (Non-Premitive) - Call by Reference

let userOne = {
    email: "mdnabeel123@gmail.com",
    password: "safique567"
}

let userTwo = userOne

userTwo.email = "nabeelahemad539@gmail.com"

console.log(userOne.email); // nabeelahemad539@gmail.com
console.log(userTwo.email); // nabeelahemad539@gmail.com