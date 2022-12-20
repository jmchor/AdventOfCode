const input = require('fs').readFileSync('./d3_input.txt', 'utf-8').split('\n');
let sumArray = [];
const alphabet = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Part 1

//         input.forEach((line) => {

//             const mid = line.length / 2;
//             const firstHalf = line.slice(0, mid);
//             const secondHalf = line.slice(mid);
//             let lineArray = []

//                 for (let i = 0; i < firstHalf.length; i++){

//                     if (secondHalf.includes(firstHalf[i]) && !lineArray.includes(firstHalf[i])) {
//                         lineArray.push(firstHalf[i])
//                     }
//                 }
//             sumArray.push(lineArray)
//         })

// let sum = 0;
//     sumArray = sumArray.flat(1)

//     for (let i = 0; i < sumArray.length; i++) {
//         sum += alphabet.indexOf(sumArray[i])
//     }

// console.log(sum)


// Part 2
//push every three lines into an array inside inputArray

let inputArray = [];
let lineArray = [];

        input.forEach((line) => {
            lineArray.push(line)
            if (lineArray.length === 3) {
                inputArray.push(lineArray)
                lineArray = [];
            }
        })


//loop through inputArray and compare each line to the other two lines
//if there is a match, push the letter into a new array
//if there is no match, move on to the next letter
//push the new array into sumArray

        inputArray.forEach((line) => {
            let lineArray = [];
            for (let i = 0; i < line[0].length; i++) {
                if (line[1].includes(line[0][i]) && line[2].includes(line[0][i]) && !lineArray.includes(line[0][i])) {
                    lineArray.push(line[0][i])
                }
            }
            sumArray.push(lineArray)
        })

        let sum = 0;
            sumArray = sumArray.flat(1)

            for (let i = 0; i < sumArray.length; i++) {
                sum += alphabet.indexOf(sumArray[i])
            }

        console.log(sum)
