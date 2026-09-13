class car{

    static wheels = 4;

constructor(make,model,price){
    this.make = make;
    this.model = model;
    this.price = price;
}
static  selfdrive(){
    console.log("Self drive")
}

    start(){
        console.log("Start the car")
    }
    drive(){
        console.log("Driving the car");
    }
}

const carObject = new car("Honda","City", 50);
console.log(carObject.make);

//Classname.variablename/function name
console.log(car.wheels);

car.selfdrive();
