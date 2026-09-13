Functions
//Log in case
//Enter creds
//Click login button
//Login happened

//ADd product to cartscenarios
//Enter cred
//Click button

//Login enter creds
//Searching product
//adding product

//Declaring function is to reused  block /pieces of code reuse again and again

//Easy maninteaince -if we update in 1 place it will update wherever it is used

//Syntax of function
function login(){
    //Define UI actions click /mathamatical
    console.log("Enter creds"); 
    console.log("Click login button");
}
login();//Calling function

//Function with parameters
function add (a,b){
    console.log(a+b);
}   
 add(10,20);//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments

//method to do addition
//@ param {number} a - First number
//@ param {number} b - Second number
function add1 (a, b) {
    return a + b;
}   
console.log(add1(20,35));//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments
console.log(add1(30,add1(10,20)));//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments    

//Function with return expression
//store the fuction inside the variable
const addition =function(a,b){
   console.log(a+b);
}   
addition(87,45);//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments    


const addition1 =function(a,b){
    return a+b;
}
let addvalue = addition1(10,20);
console.log(addvalue);//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments      


//Arrow function-shortest form //
 const addition2 = (a,b) => {
    return a+b;
}
let addvalue1 = addition2(10,86);
console.log(addvalue1);//Calling function with parameters//araguments- value passed inside the methode 2,4 is the arguments
