// 1. creating promises
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB Calls
    setTimeout(function(){
        console.log('Async task is completed...');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Comsumed...");
})




// 2. Directly creating Object
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn Task 2");
        resolve();
    },1000)
    
}).then(function(){
    console.log("Asyn task 2 Completed...");
})



// 3. calling function using resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // done some Task
        resolve({username:"Nabeel", email: "abc@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// 4. chaining tohandle error using catch()

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Nabeel", email: "abc@gmail.com"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The Promise is resolved or rejected"))


// 5. Using Async / Await 
// for error we most have to wrap under a try catch block

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"JS Mastery", email: "js@gmail.com"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
} 

consumePromiseFive()



// Handle API Using try catch 
async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("error",error);
    }
}

getAllUser()



// Using then(), catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})