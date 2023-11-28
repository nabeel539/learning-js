const coding = ["js", "ruby","java","python","cpp"]

// forEach Loop
coding.forEach(function (value) {
    console.log(value);
})

// through arrow function
coding.forEach((item,index,arr)=> {
    console.log(item, index , arr); 
})


// Accessing Array of Object
const mycoding = [
    {
        language:"javaScript",
        languageFile:"js"
    },
    {
        language:"Java",
        languageFile:"java"
    },
    {
        language:"C++",
        languageFile:"cpp"
    }
]


mycoding.forEach( (item) => {
    console.log(item);
    // console.log(item.language);
    // console.log(item.languageFile);
})


// Note : Its don't return any value


const myNums = [1,2,3,4,5,6,7,8,9,10]

// Filter returns item under specific condition

// let newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

//Note : for arrow function with { } should be with return 
let newNums = myNums.filter((num) => {
   return num > 4
})

console.log(newNums);       // [5,6,7,8,9,10]



const myNumsarray = []

myNums.forEach( (num) => {
    if (num > 4) {
        myNumsarray.push(num)
    }
})
console.log(myNumsarray);   // [5,6,7,8,9,10]
