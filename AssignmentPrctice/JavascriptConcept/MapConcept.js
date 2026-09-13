const numbers =[1,2,3,4];

let numbersquares = [];
for(let number of numbers){
    numbersquares.push(number * number);
}
console.log(numbersquares)

// maps - if we want to transform the entire array
const squares = numbers.map(number => number * number); // [1,4,9,16]
console.log(squares)

const names = ["Jyotsna","Ishan","Jaanaki","Tejas"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames)

const users = [
    {
        name: "Indira",
        age: 20
    },
    {
        name: "Sharmili",
        age: 21
    }
];

const userNames = users.map(user => user.name);
console.log(userNames);