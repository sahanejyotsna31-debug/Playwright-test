function characterFrequency(str) {
	let frequency = {};
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (frequency[char]) {
			frequency[char]++;
		} else {
			frequency[char] = 1;
		}
	}
	return frequency;
}

const inputString = "javascript";
const result = characterFrequency(inputString);
console.log("Character Frequency:", result);