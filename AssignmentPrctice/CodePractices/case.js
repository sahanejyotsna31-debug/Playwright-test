
// Food Delivery Order Management
// ===============================

// 1. Customer Details (Object)
const customer = {
    name: "Jyotsna",
    phone: "9876543210",
    address: "Pune"
};

// 2. Food Items (Array of Objects)
const foodItems = [
    { itemName: "Pizza", price: 350 },
    { itemName: "Burger", price: 180 },
    { itemName: "French Fries", price: 120 },
    { itemName: "Cold Drink", price: 80 }
];

// 3. Display Customer Details
console.log("===== CUSTOMER DETAILS =====");
console.log(`Name    : ${customer.name}`);
console.log(`Phone   : ${customer.phone}`);
console.log(`Address : ${customer.address}`);

console.log("\n===== ORDER DETAILS =====");

// 4. Calculate Total Amount
let totalAmount = 0;

for (const item of foodItems) {
    console.log(`${item.itemName} - ₹${item.price}`);
    totalAmount += item.price;
}

console.log(`\nTotal Amount : ₹${totalAmount}`);

// 5. Function to Apply Discount
function calculateFinalAmount(total) {
    let discount = 0;

    if (total >= 1000) {
        discount = total * 0.20; //20%
    } else if (total >= 500) {
        discount = total * 0.10; //10%
    } else {
        discount = 0;
    }

    const finalAmount = total - discount;

    console.log(`Discount     : ₹${discount}`);
    console.log(`Final Amount : ₹${finalAmount}`);

    return finalAmount;
}

// Call Function
calculateFinalAmount(totalAmount);

// ====================================
// 6. Class to Represent an Order
// ====================================

class Order {
    constructor(orderId, customerName, itemName, quantity, price) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
    }

    displayOrder() {
        console.log(`
Order ID      : ${this.orderId}
Customer Name : ${this.customerName}
Food Item     : ${this.itemName}
Quantity      : ${this.quantity}
Total Price   : ₹${this.quantity * this.price}
`);
    }
}

// 7. Create Multiple Order Objects

const order1 = new Order(101, "Jyotsna", "Pizza", 2, 350);
const order2 = new Order(102, "Rahul", "Burger", 3, 180);
const order3 = new Order(103, "Sneha", "Pasta", 1, 250);

// 8. Display Order Details

console.log("\n===== ORDER OBJECT DETAILS =====");

order1.displayOrder();
order2.displayOrder();
order3.displayOrder();