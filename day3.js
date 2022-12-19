const input = require('fs').readFileSync('./d3_input.txt', 'utf-8').split('\n');

const mid = input[i].length / 2;
const firstHalf = input[i].slice(0, mid);
const secondHalf = input[i].slice(mid);

console.log('input', input);
