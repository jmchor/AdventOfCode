const input = require('fs').readFileSync('./d5_input.txt', 'utf-8').split('\n');

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

let splittage = input.map(item => item.split(' '))

let numOnly = splittage.map(array => array.filter(item => {
    if (Number(item)) {
        return parseInt(item)
    } else {
        return null
    }
}))


//for each array in numOnly, use the items to move crates between the stacks array

//using a for-loop, iterate through the sub-arrays in numOnly

// i should be 1, the number of times the loop should iterate is the including the number of crates in the message: subArray[0]

//the crates that can be moved are at the end of the stack array, so one stack can be moved from stacks[subArray[1]] and attached to the end of stacks[subArray[2]] with the .push() method




console.log(numOnly)