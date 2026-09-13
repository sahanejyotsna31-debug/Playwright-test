//object literal
//Simple object creation
const employee = {
    name: "John Doe",
    age: 20,
    isWorking: true,
    Salary: 50000,
    CompanyList: ["ABC Pvt Ltd", "Amazon", "Google"],
    course: "Playwright Automation",
    city: "Chennai"
};


//Dot Notation
console.log(employee.name); //John Doe
//Bracket Notation callng with different property name
console.log(employee["name"]);


employee.name = "Jane Doe";
employee["name"] = "Jane" //updating the value of name property  
console.log(employee.name); //Jane Doe




employee.email = "abc@gmail.com"; //inserting new property to the object
console.log(employee.email);




delete employee.age; //deleting the property from the object


console.log(employee.age); //undefined




//empty object creation


const students = {};


//Nested Object
const nestedStudent = {
    name: "John Doe",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};


console.log(nestedStudent.address.city)




//Array Object


const studentsList =[
    {
        name: "indira",
        age : 20
    },
    {
        name : "pramod",
        age : 21
    },{
        name: "Narcis",
        age : 22
    }
];


studentsList[1].name = "Tarun"
console.log(studentsList[0]);




const studentDetails = {
    name: "Rahul",
    age: 25,
    courseName: "playwright",
    city : "Chennai"
};


for(const key in studentDetails){
    console.log(key+ "Value is" + studentDetails[key])
}


const fruits = ["Apple", "Mango", "Banana"];


//values only - Array


//values iteration
for(const eachFruit of fruits){
    console.log(eachFruit);
}


const studentDetails = {
    name: "Rahul",
    age: 25,
    courseName: "playwright",
    city : "Chennai"
};
//key-value pairs


//key iteration
for(const index in fruits[0]){
    console.log(fruits[index]) // value
}


const student = {
    name: "Rahul",
    age: 25,
    courseName: "playwright",
    address: {
        state: "TN",
        city : "Chennai"}
};


for (const key in student){


    if(typeof student[key] === "object"){
        for(const nestedKey in student[key]){
            console.log(student[key][nestedKey])
        }
    }else {
console.log(student[key])
    }


}


//for, while, for..of, for..in





/*
String Methods
browser
Template Literals vs concatenation




if else conditions  


Switchcase


for loop
while loop
do while loop
*/


let courseName = "JavaScripts java ";


console.log(courseName.length);
console.log(courseName.toUpperCase());
console.log(courseName.toLowerCase());
console.log(courseName.trim());
console.log(courseName.includes("javas"));
console.log(courseName.startsWith("Java"));
console.log(courseName.endsWith("java "));
console.log(courseName.indexOf("java"));
console.log(courseName.replace("java", "Python"));
console.log(courseName.substring(4, 11));


let firstName = "John";
let age = 30;


// `string ${variable}` - Template literals


console.log(`My name is ${firstName} and I am ${age} years old.`); //newer way of concatenation using template literals


console.log("My name is " + firstName + " and I am " + age + " years old."); //older way of concatenation


//voting eligibility


let age = 16;
if(age >= 18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}




const browser = "Chrome";


//Logical Operators && - and, || - or, ! - not


if(browser === "Chrome" && ticketprice > 5000 && travelChoice === "Flight"){
    console.log("You are using Chrome browser.");
}else if(browser === "Firefox"){
    console.log("You are using Firefox browser.");
}else if(browser === "Edge"){
    console.log("You are using Edge browser.");
    break;
}else{
    console.log("You are using some other browser.");
}




let browser = "Chromium";




switch(browser){
    case "Chrome":
        console.log("You are using Chrome browser.");
        break;
    case "Firefox":
        console.log("You are using Firefox browser.");
        break;
    case "Edge":
        console.log("You are using Edge browser.");
        break;
    default:
        console.log("You are using some other browser.");
        break;
}




//for loop


console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");


//for(let <variable_name> = <initial_value>; <condition>; <increment/decrement>){


for(let i=5; i>=0; i--){
    console.log(i);
}




//while loop
let num = 5;
while(num>0){


    console.log(num);


   // num--;
    num--;
    // This will run indefinitely
}
