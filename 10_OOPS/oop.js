const user = {
    username :"Nabeel",
    login:8,
    signIn : true,
    getUserDetails: function () {
        console.log("Getting details from DB....");
    }
}

// console.log(user.signIn);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // Left side Variable
    // right side Parameter
}


const userOne = User("sananansa", 10, false)
console.log(userOne.us);
