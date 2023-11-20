// Primitive (7 types : String, Number , Boolean, null, undefined, Symbol, BigInt) - Call by Value (Copy of that value)


// Reference (Non Primitive) - Array , Object, Functions


// JS is Dynamic type Language.


// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// BigInt
const bigNumber = 23434256765343234567n
console.log(typeof(bigNumber)) // bigint


// Array
const heros = ["Iron-Man","Thanos","Ant-man","Spyder Man","Thor"]

const myObj = {
    name: "Nabeel",
    age : 23,
}
console.log(myObj)

const myFun = function(){
    console.log("Hello World....")
}

/*
Note :- Type of val

Undefined   => "undefined"
**Null      => "object"
Boolean     => "boolean"
Number      => "number"
String      => "string"
function    => "object Function"
array       => "object"
*/