const input = require('fs').readFileSync('./d1_input.txt', 'utf-8').split('\n\n');

const inputArray = input.map((array) => array.split('\n'));
const addedInput = inputArray
        .map((elf) => elf.map((item) => parseInt(item)).reduce((a, b) => a + b))
        .sort((a, b) => b - a);

// part 2

let sum = 0;

for (let i = 0; i < 3; i++) {
        sum += addedInput[i];
}

console.log(sum);
