const input = require('fs').readFileSync('./d5_input.txt', 'utf-8').split('\n');


let splittage = input.map(item => item.split(' '))

splittage.forEach(array =>  array.for)

let stacks = [
    [], // to avoid index 0
    ["W","L","S"], //1
    ["J","T","N","Q"],  //2
    ["S","C","H","F","J"], //3
    ["T","R","M","W","N","G","B"],  //4
    ["T","R","L","S","D","H","Q","B"], //5
    ["M","J","B","V","F","H","R","L"], //6
    ["D","W","R","N","J","M"], //7
    ["B","Z","T","F","H","N","D","J"],  //8
    ["H","L","Q","N","B","F","T"], //9
];

console.log(splittage)