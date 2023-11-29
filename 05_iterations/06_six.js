const myNums = [1, 2, 3, 4, 5, 6, 7]


// Method haining
const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);


// Reduce
const integerNum = [1,2,3,4]

const myTotal = integerNum.reduce( (acc, curr) => (acc + curr),0)
console.log(myTotal);               // 10


// Shopping cart 

const shoppingCart = [
    {
        itemName : "Think & Grow Rich",
        price : 349
    },
    {
        itemName: "Rich Dad Poor Dad",
        price : 849
    },
    {
        itemName : "You can Sell",
        price : 1749
    }
]

let totalvalue =  shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(totalvalue);        // 2947
