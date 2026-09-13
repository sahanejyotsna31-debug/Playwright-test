//Class Concept in JavaScript
//OOPs- Obeject Oriented Programming laungauge
//Class and Object are the main concept of OOPs
//Inheritance, Polymorphism, Abstraction, Encapsulation are the main pillars of OOPs
//Class is a blueprint of an object.Its defined using class keyword in JavaScript   
//Multiple objects can be created from a single class
//Class is a template for creating objects
//Class is a user-defined data type
//Class is a special function
//object is an instance of a class
//Class is a special function that can be used to create objects

/*
class Restaurant {
    name ="ITC";
    location = "Bangalore";
    Rating = 4.5;

     function orderfood(){
        console.log("You can order food form this restaurant");
    }
    // Object creation
    const restaurant1 = new Restaurant();
    const restaurant2 = new Restaurant();   
    const restaurant3 = new Restaurant();

    console.log(restaurant1.name); // Output: ITC
    console.log(restaurant2.location); // Output: Bangalore
    console.log(restaurant3.Rating); // Output: 4.5     
restaurant2.orderfood(); // You can order food form this restaurant 

*/

//constructor is a special method that is used to initialize the object of a class
//constructor is called automatically when an object is created
//constructor is a default menthod where we have to pass the values of the properties of the class
class Restaurant {
    constructor(name, location, rating) {   
        this.name = name;
        this.location = location;
        this.rating = rating;
    }
    order(){
        console.log("You can order food form this restaurant"); 
    }
}
    const restaurant1 = new Restaurant("ITC", "Bangalore", 4.5);
    const restaurant2 = new Restaurant("Taj", "Mumbai", 4.8);
    const restaurant3 = new Restaurant("Leela", "Delhi", 4.2);

    console.log(restaurant1.name); // Output: ITC
    console.log(restaurant2.location); // Output: Bangalore
    console.log(restaurant3.rating); // Output: 4.5
    restaurant2.order(); // You can order food form this restaurant 

//this keyword is used to refer the current object of a class
//this keyword is used to access the properties and methods of a class
//this is scenario variable that refers to the current object of a class
        
class Execution {
    constructor(scenario, browser) {
        this.scenario = scenario;
        this.browser = browser;
    }

    executescenarios(scenario) {
        if (scenario === "Login") {
            console.log("Run Login Scenarios");
        } else {
            console.log("Running different scenarios");
        }
    }
}

const chrome = new Execution("Login", "Chrome");
const firefox = new Execution("Cart", "Firefox");

chrome.executescenarios(chrome.scenario);
firefox.executescenarios(firefox.scenario);
