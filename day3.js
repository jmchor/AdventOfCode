const input = require('fs').readFileSync('./d3_input.txt', 'utf-8').split('\n');
let sumArray = [];
const alphabet = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


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

let lineArray = []

                for (let i = 0; i < input.length; i++){

                    if (input.includes(input[i]) && !lineArray.includes(firstHalf[i])) {
                        lineArray.push(firstHalf[i])
                    }
                }
