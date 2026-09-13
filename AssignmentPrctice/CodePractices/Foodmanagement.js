
//food dilivery order management

//Customer Deatil 

const customer = {
 name:"Jyotsna Sahane",
 phone: 7249343634,
 City:"Pune"
}

//Food Item//

const fooditem=[
    {itemname:"Pizza",price :350},
    {itemname:"Burger",price:200},
    {itemname:"FrenchFries",price:150},
    {itemname:"ColdCoffe",price:100}
]

//Dispaly customer Details//
console.log("=====Customer Details====");
console.log(`name   :${customer.name}`);
console.log(`phone  :${customer.phone}`);
console.log(`City   :${customer.City}`);

console.log("\n====Order Deatil===");

//calculate total amount

let totalAmount =0;

for (const item of fooditem){
    console.log(`${item.itemname} - ${item.price}`);
    totalAmount +=item.price;

}

console.log(`\nTotalAmount  :${totalAmount}`);


//Function to apply Discount

// return discount and final amount
function calculateFinalAmount(total) {
    let discount = 0;
    if (total >= 1000) discount = total * 0.20; // 20%
    else if (total >= 500) discount = total * 0.10; // 10%
    return { discount, finalAmount: total - discount };
}

const { discount, finalAmount } = calculateFinalAmount(totalAmount);
console.log(`Discount    :${discount}`);
console.log(`Final Amount :${finalAmount}`);


//Class to Represent an Order

class Order {
    constructor(orderID, customerName, itemname, quantity, price) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.itemname = itemname;
        this.quantity = quantity;
        this.price = price;
    }
    displayOrder() {
        console.log(`
        Order ID       :${this.orderID}
        Customer Name  :${this.customerName}
        Food Item      :${this.itemname}
        Quantity       :${this.quantity}
        Total Price    :${this.quantity * this.price}
        `);
    }
}

//Create Multiple Order Object 

const order1 = new Order(101, "Jyotsna", "Pizza", 2, 350);
const order2 = new Order(102, "Rahul", "Burger", 1, 200);
const order3 = new Order(103, "Sneha", "FrenchFries", 2, 150);

//Display Order Details

console.log(`\n==== Order Deatil=====`);
order1.displayOrder();
order2.displayOrder();
order3.displayOrder();