//Food ordering 
//order food > restaurant accept > food preparation >Dilivery partner assign >Food pick up> food dilivery 
//  1hour
//45 mins

const { rejects } = require("node:assert");
const { error } = require("node:console");
const { resolve } = require("node:dns");


//Asynchronus operation concept in JS
//Promise
//Async /awiat
//Callback function


//synchronous

console.log("order food");

console.log("Food Delivered");

//Asynchronous 

console.log("Order Food");

setTimeout(()=> {console.log("Food Delivered");} ,3000);
console.log("Watching Youtube");
console.log("Working on Project");

//Callback function is 

//declaring method outside and calling the method name as a parameter
//Defining  arrow function as a parameter

function preparefood(callback){

//console.log("Preparing Food");

//console.log("Delivery Partner");
//console.log("Food is ready");
//console.log("Delivery Started");
//console.log("Food Delivered");

console.log("Preparing Food");
setTimeout(() => {console.log("Food is ready");
callback();
},  5000)

console.log("Delivered Partner Assigned");
}

function deliveryfood(){
    console.log("Delivered Started");
    console.log("Food delivered");
}

preparefood(deliveryfood);


//callback Hell - Chaining is happening based on callback -Not advisible for larger flow

preparefood(() => {
    packfood(() =>{
        AssignDeliveryAgent(() =>{
            deliveryfood(()=>{
                WebGLTransformFeedback();
            })
        })
     
        })
    })


//promise as a solution for callback hell

// Assign Promise -waiting for food to get ready 

//Delivered //cancelled
//Once food ready or it will cancelled



const foodOrder = new Promise((resolve,reject) =>{

    let restaurantOpen = false;

    if(restaurantOpen){
        resolve("Food Delivered")
    }else {
        reject("Restaurant Closed");

    }

});

foodOrder.then(result =>{
    console.log(result);
}).catch(error =>{
    console.log(error);
});

