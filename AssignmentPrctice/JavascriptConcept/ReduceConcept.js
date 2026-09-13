
const numbers = [10,20,30];

//(acc,eachelement) => action, starting accumalator value

const total = numbers.reduce((sum,number)=> sum + number, 0); //sum value will be 0 and num wil 10
console.log(total);


//largest number

const numbers = [10,20,30,50,90];

const largest = numbers.reduce((largest,number) => {
    if(number >largest){
        return number;

    }else return largest;
},0 )

console.log(largest)


//array of object

const cart = [
    {item :"Biryani",
        price:300

    },
    {item :"Cake",
        price:360

    },{

    
       item :"chochloate",
        price:340

    },
];

const totalCartPrice = cart.reduce((total,item) => sum +item.price, 0)
console.log(totalCartPrice)