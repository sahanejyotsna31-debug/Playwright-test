//   placeholder test file for Supermarket  
// use `require('./Supermarket').price` to access the value 
let price = 9800;   
console.log("Price of the product is: " + price);
if (price > 5000) {
    console.log("Discount is 20%.");
    let discount = price * 0.2;
    let finalPrice = price - discount;
    console.log("Final Price after discount: " + finalPrice);
}else if (price  >= 3000 && price <= 5000) {
    console.log("Discount is 10%.");
    let discount = price * 0.1;
    let finalPrice = price - discount;
    console.log("Final Price after discount: " + finalPrice);
}else if (price >=1000 && price <=2999){
    console.log("Discount is 5%.");
    let discount = price * 0.05;
    let finalPrice = price - discount;
    console.log("Final Price after discount: " + finalPrice);
}else{
    console.log("No discount available.");
}

