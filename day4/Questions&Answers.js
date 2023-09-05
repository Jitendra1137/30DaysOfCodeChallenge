// ## Q. Type Casting

// Ans. Typecasting is the process of changing data type of a value from one type to another. Also known as type conversion  

// Example -  (1) Implicit Typecasting (Coercion)

let numA = 5;
let strA = "1";

let result = numA + strA;
console.log(result);

// (2) Explicit Typecasting
// a. Explicitly converting to an integer using parseInt() and parseFloat():

let strNum = "10";
let numB = parseInt(strNum);

console.log(numB);

//b. Explicitly converting to a number using Number(), String(), or Boolean(): 

let numStr = "42";
let numC = Number(numStr);

console.log(numC);

// Using the String() function:
let numD = 42;
let str = String(numD);

console.log(str);

// Using the Boolean() function:
let numE = 0;
let bool = Boolean(numE);

console.log(bool);
//========================================
//## Q. Closure 

// Ans. Closure occurs when a function is defined within another function and has access to the outer function's variables, even after the outer function has finished executing. Closures are useful for creating private variables, encapsulating data, and implementing data hiding.

function outerFunction() {
    let outerVariable = "I am from outerFunction";

    function innerFunction() {
        console.log(outerVariable); // innerFunction can access outerVariable
    }

    return innerFunction; // Return the inner function, creating a closure
}

let closureExample = outerFunction(); // closureExample now holds innerFunction

closureExample(); // Output : "I am from outerFunction"

// Q. Var and const

// Ans. Variables declared with var have function scope and are hoisted to the top of their scope. They can be re-declared and reassigned. Example

var x = 5;
console.log(x); // Output: 10

var x = 20; // Re-declaration is allowed 
console.log(x) // Output: 20

function varExample() {
    var y = 5;
    console.log(y); // Output: 5
}

varExample();

// Variables declared with const also have block scope and are not hoisted. They are constants and cannot be reassigned or re-declared. Example:

const p = 5;
console.log (p); // Output : 5

const p = 10; // Throws SyntaxError: Identifier 'x' has already been declared

if (true) {
    const y = 2;
    console.log (y); // Output : 2
}

//====================================
// Q. Loops (for, foreach, for of, for in)

// Ans. for:  The for loop is a versatile loop that allows you to specify the initialization, condition, and increment/decrement steps.

for (var i = 0; i < 5; i++) {
    console.log("Iteration " + i);
  }
  
//  forEach: The forEach method executes a provided function once for each array element. It  is specifically designed for iterating over arrays.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach (function(number){
    console.log(number * 2);
})

//for Of: The forOf loop is used to iterate over iterable objects like arrays, strings, and more.

let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}


// for in: The forIn loop is used to iterate over the properties of an object.

let person = {
    name: "Ajeet",
    age: 23,
    city: "Motihari"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  


// Q. Scope (Lexical)
// Ans: Lexical scoping means that the scope is defined at the location where the variable and function is defined (as opposed to where they are run).


//===================================
// Q. Maps

// Ans : The map method creates a new array by applying a provided function to each element of the original array.

let numbers2 = [1, 2, 3, 4, 5];

let doubledNumbers = numbers2.map (function(number){
    return Number * 2;
});

console.log(doubledNumbers);