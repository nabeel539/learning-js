// Object Literals


const mySymbol = Symbol("key1")

const DemoUser = {
    name: "Nabeel",
    "full name":"MD Nabeel Ahemad",
    [mySymbol]: "myKey1",       // Symbol
    age:23,
    location:"jaipur",
    email:"nabeel@yusata.com",
    isLoggedIn:false,
    lastLogin:["Monday","Tuesday","Thursday","Friday"]
}

// Accessing object
console.log(DemoUser.name);         // 1st way
console.log(DemoUser["full name"]); // 2nd way


// Modifying Obj
DemoUser.email = "nabeelahemad539@gmail.com"
console.log(DemoUser.email);

// Accessing Symbol
console.log(DemoUser[mySymbol]);
console.log(typeof [mySymbol]);

// Modifying value of Symbol
DemoUser[mySymbol] = "mykey2";
console.log(DemoUser[mySymbol]);


// Preventing Modification
//Object.freeze(DemoUser)

DemoUser.email = "nabeelahemad133@gmail.com"

console.log(DemoUser); // Object doesnot modifies as it's freeze before

DemoUser.greetings = function(){
    console.log("hello world....");
}
console.log(DemoUser.greetings());

DemoUser.greetingsTwo = function(){
    console.log(`welcome to coding world, Mr.${this.name}`); // String interpolation
}

console.log(DemoUser.greetingsTwo());