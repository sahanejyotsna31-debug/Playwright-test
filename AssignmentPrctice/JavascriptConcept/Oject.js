const { countReset } = require("node:console");

const student1 = {
    name: "Rahul Sharma",
    age: 20,
    course: "Playwright",
    isworking : true,
    salary : 50000,
    CompanyList: ["TCS", "Infosys", "Wipro"],
    City :"Pune",
}
//Dot Notation
console.log(student1.name);
//Bracket Notation calling with different property name
console.log(student1["name"])

student1.name ="Jyotsna Sahane";//Updating the value of name property
console.log(student1.name);
student1.email = "sahanejyotsna31@gmail.com";//Adding new property email to student1 object
console.log(student1.email);    
delete student1.age//Deleting the age property from student1 object 
console.log(student1.age);//undefined because age property is deleted from student1 object

//empty object creation
const member = {};

//nested object creation
const employee={
    name: "Rahul Sharma",
    age: 20,
    course: "Playwright",
    address: {
        street: "123 Main St",
        city: "Pune",
        state: "Maharashtra"
    }
};
console.log(employee.address.city);//Accessing nested object property using dot notation
console.log(employee["address"]["state"]);//Accessing nested object property using bracket notation

//Array of objects
const students = [
    { name: "jaanaki", age: 2, },
    { name: "Jyotsna", age: 3, },
    { name: "Ishan", age: 4, },
];
console.log(students[0].name);//Accessing object property from array of objects 
console.log(students[1]["age"]);

students[0].name="Ojasvi";//Updating the name property of first object in students array
console.log(students[0].name);

const student2 = {
    name: "Ishan",
    age: 4,
    course: "Playwright",   
}
for (const key in student2) {
    console.log(key + ": " + student2[key]);//Accessing object properties using for...in loop
}

const fruits = ["Apple", "Banana", "Mango"];
for (let eachfruit of fruits) {
    console.log(eachfruit);//Accessing array elements using for...of loop
}