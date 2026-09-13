function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];       
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }   
    }
    return count;
}   
const inputString = "JavaScript";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);  
