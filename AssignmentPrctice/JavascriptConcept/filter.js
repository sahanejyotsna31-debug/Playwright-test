const numbers = [1,2,3,4];


//filter-it will add on value based on conditions satisfied 
const greaternumber = numbers.filter(number => number > 1);

console.log(greaternumber);

const greaternumber = numbers.filter(number => number%2===0 );


const restaurants = [

    {name:"A",
        rating:4.5
    }
      {name:"B",
        rating:4
    }
      {name:"C",
        rating:3
    }
]

const topRestaurant = restaurant.filter( restaurant => restaurant.rating);

console.log(topRestaurant)