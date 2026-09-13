//Javascript Operators and Operator 

let num = 10;
let num1 = 20;
//Arithmetic operators
console.log("=====Arithmetic Operators=====");
console.log("Addition: " + (num + num1)); //Addition
console.log("Subtraction: " + (num1 - num)); //Subtraction
console.log("Multiplication: " + (num * num1)); //Multiplication
console.log("Division: " + (num1 / num)); //Division
console.log("Modulus: " + (num1 % num)); //Modulus

//Comparison operators
console.log("=====Comparison Operators=====");
console.log("Equal: " + (num == num1)); //Equal
console.log("Not Equal: " + (num != num1)); //Not Equal
console.log("Greater Than: " + (num1 > num)); //Greater Than
console.log("Less Than: " + (num1 < num)); //Less Than
console.log("Greater Than or Equal: " + (num1 >= num)); //Greater Than or Equal
console.log("Less Than or Equal: " + (num1 <= num)); //Less Than or Equal

console.log("=====Assignment Operators=====");
//Assignment operators
let x = 20;      
console.log("Initial value of x: " + x);
x += 3; 
console.log("After x += 3: " + x); // x = x + 3
x -= 2; 
console.log("After x -= 2: " + x);      // x = x - 2
x *= 4; 
console.log("After x *= 4: " + x);      // x = x * 4
x /= 2; 
console.log("After x /= 2: " + x);      // x = x / 2
x %= 3; 
console.log("After x %= 3: " + x);      // x = x % 3      
x **= 2;
console.log("After x **= 2: " + x);      // x = x ** 2  

//Math functions
console.log("=====Math Functions=====");
console.log("Math.sqrt(16): " + Math.sqrt(16));
console.log("Math.max(5, 10): " + Math.max(5, 10));
console.log("Math.min(5, 10): " + Math.min(5, 10));
console.log("Math.round(5.5): " + Math.round(5.5));
console.log("Math.floor(5.9): " + Math.floor(5.9));
console.log("Math.ceil(5.1): " + Math.ceil(5.1));   
