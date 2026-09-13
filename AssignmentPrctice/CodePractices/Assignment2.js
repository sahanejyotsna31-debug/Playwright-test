// Restaurant Class

class Restaurant {
    constructor(restaurantName, location, rating) {
        this.restaurantName = restaurantName;
        this.location = location;
        this.rating = rating;
    }

    // Display Restaurant Details
    displayDetails() {
        console.log("Restaurant Name :", this.restaurantName);
        console.log("Location        :", this.location);
        console.log("Rating          :", this.rating);
        console.log("-----------------------------------");
    }

    // Place Order
    placeOrder(foodItem) {
        console.log(`${foodItem} has been ordered from ${this.restaurantName}.`);
        console.log("-----------------------------------");
    }
}

// Creating Objects
const restaurant1 = new Restaurant("Spice Garden", "Pune", 4.5);
const restaurant2 = new Restaurant("Food Palace", "Mumbai", 4.3);
const restaurant3 = new Restaurant("Burger House", "Nashik", 4.7);

// Display Details
restaurant1.displayDetails();
restaurant2.displayDetails();
restaurant3.displayDetails();

// Place Orders
restaurant1.placeOrder("Paneer Biryani");
restaurant2.placeOrder("Veg Thali");
restaurant3.placeOrder("Cheese Burger");


const marks = [85, 42, 67, 91, 30, 76, 58];

// 1. Print all marks
console.log("All Marks:");
for (let mark of marks) {
    console.log(mark);
}

// 2. Marks 50 and above
const passedStudents = marks.filter(mark => mark >= 50);

console.log("\nPassed Students (50 and above):");
console.log(passedStudents);

// 3. Highest Mark
const highestMark = Math.max(...marks);

console.log("\nHighest Mark:", highestMark);

// 4. Average Mark
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;

console.log("Average Mark:", average.toFixed(2));

// 5. Total Passed Students
console.log("Total Passed Students:", passedStudents.length);

function prepareFood() {
    return new Promise((resolve) => {
        console.log("Preparing Food...");
        setTimeout(() => {
            console.log("Food Prepared");
            resolve();
        }, 2000);
    });
}

function packFood() {
    return new Promise((resolve) => {
        console.log("Packing Food...");
        setTimeout(() => {
            console.log("Food Packed");
            resolve();
        }, 2000);
    });
}

function assignDelivery() {
    return new Promise((resolve) => {
        console.log("Assigning Delivery Partner...");
        setTimeout(() => {
            console.log("Delivery Partner Assigned");
            resolve();
        }, 2000);
    });
}

function deliverFood() {
    return new Promise((resolve) => {
        console.log("Delivering Food...");
        setTimeout(() => {
            console.log("Food Delivered Successfully");
            resolve();
        }, 2000);
    });
}

// Promise Chaining
prepareFood()
    .then(() => packFood())
    .then(() => assignDelivery())
    .then(() => deliverFood())
    .then(() => console.log("Order Completed!"))
    .catch((error) => console.log(error));

    class BankAccount {
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Deposit
    deposit(amount) {
        try {
            if (amount <= 0) {
                throw "Invalid Deposit Amount.";
            }

            this.balance += amount;
            console.log(`₹${amount} deposited successfully.`);
        } catch (error) {
            console.log(error);
        }
    }

    // Withdraw
    withdraw(amount) {
        try {
            if (amount > this.balance) {
                throw "Insufficient Balance.";
            }

            if (amount <= 0) {
                throw "Invalid Withdrawal Amount.";
            }

            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully.`);
        } catch (error) {
            console.log(error);
        }
    }

    // Check Balance
    checkBalance() {
        console.log(`Current Balance : ₹${this.balance}`);
    }
}

// Object Creation
const account1 = new BankAccount("Jyotsna", 123456789, 10000);

// Deposit
account1.deposit(5000);
account1.checkBalance();

// Withdraw
account1.withdraw(3000);
account1.checkBalance();

// Invalid Withdrawal
account1.withdraw(15000);

// Invalid Deposit
account1.deposit(-500);