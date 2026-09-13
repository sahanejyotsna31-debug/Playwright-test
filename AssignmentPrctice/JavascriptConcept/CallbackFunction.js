//passing function as an argument -callback

function greet(name){
    console.log("Welcome!" + name);
}
function execute(callback){

    callback("Jyotsna");
}

execute(greet)



function paymentProcess(callback){
    console.log("Payment Process");
    callback();
}
function paymentsucess(){
console.log("Payment Sucess defined");
}
paymentProcess(paymentsucess);
payment(()=>{
console.log("Payment Sucess");
    
});
paymentProcess(paymentsucess);

//
paymentProcess((a,b)=>{
     console.log(a+b)});




