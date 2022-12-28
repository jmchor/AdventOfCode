const input = require('fs').readFileSync('./d8_input.txt', 'utf-8').split('\n');
const forrestMap = input.map(line => line.split(''));

//include a rotated version of the map where columns are rows
const rotatedMap = forrestMap[0].map((_, i) => forrestMap.map(row => row[i]));


//Part 1

let sum = 0;
let tallestFromTop = forrestMap[0][1];

//columns
for (let i = 1; i < forrestMap.length -1; i++) {

    let tallestFromLeft = forrestMap[i][0];
    let tallestFromRight = forrestMap[i][forrestMap[0].length -1];
    //rows from left
    for (let j = 1; j < forrestMap[0].length -1; j++) {

        //check if the current tree is taller than the tallest so far from the left OR
        //the tallest so far from the top by comparing the same sections but in the rotated map

        if (tallestFromLeft < forrestMap[i][j] || tallestFromTop < forrestMap[i][j]) {
            tallestFromLeft = forrestMap[i][j];
            sum++;
        }

    }
    //rows from right
    for (let j = forrestMap[0].length -2; j >= 1; j--) {

        console.log(`In row ${i}: The tallest so far is ${tallestFromRight}`)
        if (tallestFromRight < forrestMap[i][j]) {

            tallestFromRight = forrestMap[i][j];
            console.log(`In row ${i}: The new tallest so far is ${tallestFromRight}`)
            sum++;
            console.log(sum)
        }
    }

}

console.log(forrestMap)