//Abstarction --hiding complex internal implemenation and exposing only the required functionlity
//UPI -Government layer

//HDFC,ICIC,UPI fuction method
//UPI -sendPayment()
//API -authentication token

class FoodOrder{
     
    placeOrder(){
        this.checkRestaurant();
        this.calculatePrice();
        this.processPayment();

        console.log("Order Placed");
    }

    checkRestaurant(){
     console.log("Restaurant available");
    }

    calculatePrice(){
console.log("Price Calculated");
    }
    processPayment(){
console.log("Payment Proceed");
    }
}

  const order = new FoodOrder;
  order.placeOrder();