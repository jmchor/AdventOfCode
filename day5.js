const input = require('fs').readFileSync('./d5_input.txt', 'utf-8').split('\n');

let stacks = [
    [], // to avoid index 0
    ["M","J", "C", "B", "F", "R", "L", "H"], //1
    ["Z","C","D"],  //2
    ["H","J","F","C","N", "J", "W"], //3
    ["P","J","D","M","T","S","B"],  //4
    ["N","C","D","R","J"], //5
    ["W","L","D","Q","P","J","G","Z"], //6
    ["P","Z","T","F","R","H"], //7
    ["L","V","M","G"],  //8
    ["C","B","G","P","F","Q","R", "J"], //9
];

// I was very lazy - I just transcribed the vertical stacks into horizontal stacks and removed the stacks from the input

let splittage = input.map(item => item.split(' '))

//This reduces the instructions to just the numbers indicating the number of crates to be moved from one stack to another
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
//the .pop() method removes the last item in an array
//if the subArray[1] is empty, continue to the next iteration of the loop


numOnly.forEach(subArray => {

    let middleMan = []

for (let i = 0; i < subArray[0]; i++) {

    if (stacks[subArray[1]].length !== 0) {
    let grabbedCrate = stacks[subArray[1]].pop()
    middleMan.push(grabbedCrate)
    }

}
//the spread operator is used to add the contents of middleMan to the end of stacks[subArray[2]]
//You could do it in shorter code, but this makes it easier for part two, when the crane can move more crates, so the order of crates moved stays in tact

//in order to the "middleMan"-variable gets reversed to show the original order of the crates before they were moved (as if they were moved in one go)
//reverse the order with .reverse() right there in the spread operator
    stacks[subArray[2]] = [...stacks[subArray[2]], ...middleMan]
})

//the message is the last item in each stack
const message = stacks.map(stack => stack[stack.length - 1]).join('')


console.log(stacks)
console.log(message)
//tada!