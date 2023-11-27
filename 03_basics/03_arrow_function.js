// this Key
const user = {
    username : "nabeel",
    price : 199 ,

    welcomeMsg : function(){
        console.log(`${this.username}, Welcome to website`);

        console.log(this);
    }
}

user.welcomeMsg()               // { username: 'nabeel', price: 199, welcomeMsg: [Function: welcomeMsg] }
user.username = "Nadeem"
user.welcomeMsg()               // { username: 'Nadeem', price: 199, welcomeMsg: [Function: welcomeMsg] }


function chai(){
    let username = 'Saamm';
    console.log(this.username); // undefined
}
chai();


// Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,5));

// Calling Object using Arrow Function
const addStatus = () => ({user:"nabeel", roll:12})
console.log(addStatus());