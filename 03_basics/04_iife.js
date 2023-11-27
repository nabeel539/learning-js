// (IIFE) Immediately Invoked Function Expressions
/* -> It's a design pattern where a function is defined and executed immediately after it's created.

-> IIFEs are often used to create a local scope to avoid polluting the global namespace with variables. 
*/


(function chai(){
    console.log("DB Connected.....");
})();


(()=> {
    console.log("DB CONNECTED TWO.....");
})();


// 
((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Nabeel');


