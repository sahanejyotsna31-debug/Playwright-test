//Bank Account system

class BankAccount {
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    //Deposit Money
    deposit(amount) {           
        try {
            if (amount <= 0) {
                throw new Error("Deposit amount must be positive.");
            }
            this.balance += amount;
            console.log(`₹${amount} deposited successfully. New balance: ₹${this.balance}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    //withdraw Money
    withdraw(amount) {
        try {
            if (amount <= 0) {  
                throw new Error("Invalid Withdrawal amount ");
            }
            if (amount > this.balance) {
                throw new Error("Insufficient funds.");
            }
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully. New balance: ₹${this.balance}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    //Check Balance
    checkBalance() {
        console.log(`Current balance: ₹${this.balance}`);
    }
}

//Create Bank Account Object
const account1 = new BankAccount("Jyotsna", 123456789, 20000);
//Deposit Money
account1.deposit(5000);
account1.checkBalance();    
//withdraw Money
account1.withdraw(2000);
account1.checkBalance();    
//Try to withdraw more than balance
account1.withdraw(15000);
account1.checkBalance();        
//Try to deposit negative amount
account1.deposit(-1000);
account1.checkBalance();    