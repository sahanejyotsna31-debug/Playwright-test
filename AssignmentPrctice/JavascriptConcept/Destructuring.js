//Destructuring: allows us to extract values from arrays or objects and assign them to variables in a cleaner and shorter way.

//Array Destructuring:
const fruits = ["Apple", "Mango", "Orange"];
const [first, second] = fruits;

console.log(first); // Output: Apple
console.log(second); // Output: Mango   
console.log

//Object Destructuring:
const student = {
    name: "Vignesh",
    age: 28
};
const { name, age } = student;
console.log(name); // Output: Vignesh
console.log(age); // Output: 28


/*🎯 Benefits
Less code
Better readability
Easier access to array elements and object properties */

 //Spread Operator (...) The Spread Operator expands the elements of an array or object.


//Example – Merge Arrays
const veg = ["Idly", "Dosa"];
const nonVeg = ["Chicken", "Biryani"];

const menu = [...veg, ...nonVeg];
 
console.log(menu); // Output: ["Idly", "Dosa", "Chicken", "Biryani"]
//Example – Merge Objects
const person = { name: "Vignesh", age: 28 };
const address = { city: "Pune", state: "Maharashtra" }; 
console.log({ ...person, ...address }); // Output: { name: "Vignesh", age: 28, city: "Pune", state: "Maharashtra" } 


//Example – Copy Object
const student = {
    name: "Vignesh"
};

const employee = {
    ...student,
    company: "Freshworks"
};

/*🎯 Common Uses
Merge arrays
Copy arrays
Copy objects
Update object properties */

/*✅ Rest Operator (...)
📌 Definition:
The Rest Operator collects multiple values into a single array.
Example:*/
function order(customer, ...items) {
    console.log(customer);
    console.log(items);
}
order("Vignesh", "Pizza", "Burger", "Coke");
/*Output:  Customer → Vignesh , Items → ["Pizza","Burger","Coke"]
📝 Remember : Spread ➜ Expands values , Rest ➜ Collects values */



