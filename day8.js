console.time()
const input = require('fs').readFileSync('./d8_input.txt', 'utf-8').split('\n');
const forrestMap = input.map(line => line.split(''));



//create "empty" forest map
const emptyMap = forrestMap.map(row => row.map(_ => 0));
let sum = 0
//Part 1

// // row left to right
// for (let i = 1; i < forrestMap.length -1; i++) {

//     let tallestFromLeft = forrestMap[i][0];
//     let tallestFromTop = forrestMap[0][i];

//     for (let j = 1; j < forrestMap[0].length -1; j++) {

//         if (tallestFromLeft < forrestMap[i][j] ) {
//             emptyMap[i][j] = 1;
//             tallestFromLeft = forrestMap[i][j];
//     }
//         if (tallestFromTop < forrestMap[j][i] ) {
//             emptyMap[j][i] = 1;
//             tallestFromTop = forrestMap[j][i];
//     }
// } }



// for (let i = 1; i < forrestMap.length -1; i++) {

//     let tallestFromRight = forrestMap[i][forrestMap[0].length -1];
//     let tallestFromBottom = forrestMap[forrestMap.length -1][i];

//     for (let j = forrestMap[0].length -2; j >= 1; j--) {

//         if (tallestFromRight < forrestMap[i][j] ) {
//             emptyMap[i][j] = 1;
//             tallestFromRight = forrestMap[i][j];
//     }
//         if (tallestFromBottom < forrestMap[j][i] ) {
//             emptyMap[j][i] = 1;
//             tallestFromBottom = forrestMap[j][i];
// }
// } }



// emptyMap.forEach(row => {

//     sum += row.reduce((acc, curr) => acc + curr, 0)

// })

// let ultimateSum = sum + forrestMap.length * 4 - 4



// console.log(ultimateSum)

// console.timeEnd()





//Part 2

//for every tree, count the number of trees between it and a tree that is higher than it
//count in every direction

// to the left
for (let i = 0; i < forrestMap.length; i++) {

    for (let j = 0; j < forrestMap.length; j++) {

       let currentTree = forrestMap[i][j];

       if (currentTree > forrestMap[i][j+1]) {
           sum += 1;
       }
    }

}