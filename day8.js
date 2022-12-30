const input = require('fs').readFileSync('./d8_input.txt', 'utf-8').split('\n');
const forrestMap = input.map(line => line.split(''));



//create "empty" forest map
const emptyMap = forrestMap.map(row => row.map(_ => 0));
let sum = 0
//Part 1

// row left to right
//     for (let i = 1; i < forrestMap.length -1; i++) {

//         let tallestFromLeft = forrestMap[i][0];
//         let tallestFromTop = forrestMap[0][i];

//         for (let j = 1; j < forrestMap[0].length -1; j++) {

//             if (tallestFromLeft < forrestMap[i][j] ) {
//                 emptyMap[i][j] = 1;
//                 tallestFromLeft = forrestMap[i][j];
//             }
//             if (tallestFromTop < forrestMap[j][i] ) {
//                 emptyMap[j][i] = 1;
//                 tallestFromTop = forrestMap[j][i];
//             }
//         }

//         let tallestFromRight = forrestMap[i][forrestMap[0].length -1];
//         let tallestFromBottom = forrestMap[forrestMap.length -1][i];

//         for (let j = forrestMap[0].length -2; j >= 1; j--) {

//             if (tallestFromRight < forrestMap[i][j] ) {
//                 emptyMap[i][j] = 1;
//                 tallestFromRight = forrestMap[i][j];
//             }
//             if (tallestFromBottom < forrestMap[j][i] ) {
//                 emptyMap[j][i] = 1;
//                 tallestFromBottom = forrestMap[j][i];
//             }
//         }
//     }


// emptyMap.forEach(row => { sum += row.reduce((acc, curr) => acc + curr, 0)})
// let ultimateSum = sum + forrestMap.length * 4 - 4


// console.log(ultimateSum)


//Part 2

let absoluteHighScore = 0

    for (let i = 1; i < forrestMap.length-1; i++) {

        for (let j = 1; j < forrestMap.length-1; j++) {

            let currentTree = forrestMap[i][j];
            //shorter version is to just set total and have total be total *= count after every inner loop; this is more verbose
            let left = 0
            let right = 0
            let top = 0
            let bottom = 0
            let count = 0


            //To the right
            for (let x = j+1; x < forrestMap.length; x++) {
                count++
                if (currentTree <= forrestMap[i][x]) break;
            }
            right = count

            //To the left
            count = 0 //reset count
            for (let x = j-1; x >= 0; x--) {
                count++
                if (currentTree <= forrestMap[i][x]) break;
            }
            left = count

            //To the top
            count = 0
            for (let y= i-1; y >= 0; y--) {
                count++
                if (currentTree <= forrestMap[y][j]) break;
            }
            top = count

            //To the bottom
            count = 0
            for (let y= i+1; y < forrestMap.length; y++) {
                count++
                if (currentTree <= forrestMap[y][j]) break;
            }
            bottom = count

            let total = left * right * top * bottom

            if (total > absoluteHighScore) {
                absoluteHighScore = total
            }
        }
    }


    console.log(absoluteHighScore)

