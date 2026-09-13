function removeDuplicates(arr) {
    const uniqueArr = [];   
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }   

    }
    return uniqueArr;
}   
const inputArray = [10, 20, 10, 30, 20, 40, 30, 50];
const resultArray = removeDuplicates(inputArray);
console.log("Original Array:", inputArray);
console.log("Array after removing duplicates:", resultArray);   