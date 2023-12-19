const user = {
        username :"Nabeel",
        login:8,
        signIn : true,
        getUserDetails: function () {
        console.log("Getting details from DB....");
    }
}

console.log(user.signIn);
console.log(user.getUserDetails());


// this keyword
const userOne = {
    username :"MonkeyYT",
    login:8,
    signIn : true,
    getUserDetails: function () {
        console.log(`Username : ${this.username}`);
    }
}

console.log(userOne.getUserDetails());



// Constructor
function User(username,loginCount, isLoggedIn ){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}

const userTwo = User("Nabeel", 12, true)
const userThree = User("Safique", 23, false)
console.log(userTwo); // this overrides the previous object , So we are creating object with new keyword

const userFour = new User("PaPa", 10, true)
// console.log(userTwo);
// console.log(userThree);
console.log(userFour.constructor);      // reference of that object



// instance of
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  