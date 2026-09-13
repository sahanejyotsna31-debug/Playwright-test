function findLargestNumber(arr) {
    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}
const numbers = [10, 45, 23, 89, 12, 67];
const largestNumber = findLargestNumber(numbers);
console.log("Largest Number:", largestNumber);  
