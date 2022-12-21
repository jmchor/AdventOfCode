const input = require('fs').readFileSync('./d4_input.txt', 'utf-8').split('\n');

const compare = input.map(item => item.split(',').map(item => item.split('-').map(Number)));

let containsCompleteRange = 0;


 compare.forEach(line => line.forEach(innerArray => {

    for (let i = innerArray[0] + 1; i < innerArray[innerArray.length - 1]; i++) {
        innerArray.splice(innerArray.indexOf(i), 0, i)
    }

}))

compare.forEach(line => {

    if (line[0].every( item => line[1].includes(item))) {
        containsCompleteRange++
    } else if (line[1].every( item => line[0].includes(item))) {
        containsCompleteRange++
    }
})

console.log(containsCompleteRange)

// for  Part2, replace .every() with .some() and it works