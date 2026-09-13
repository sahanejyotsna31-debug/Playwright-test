

class vehical{

    make = "V";
    start(){
        console.log("Vehical Start")
    }

    stop(){
        console.log("Vehical Stop")
    }

    drive(){

    }

    sit(){

    }
    instanceof(){

    }
}

//Polymorphism- multiple forms of behaviours for a single property
//Encapsulation -Process bunding data and method
class car extends vehical{
//method overriding

   start(){
      console.log("Car is Started")
   }

    autostart(){
        
    }
}

const carObject = new car();
carObject.start();

//Super Keyword

class customer{

    login(){
        console.log("Customer login");
    }
}

class vipcustomer extends customer{
 login(){
    super.login();//calling parent method
    console.log("VIP customer logged in");//add it own behaviours
 }

}

const vip =new vipcustomer();
vip.login();
