const input = require('fs').readFileSync('./d8_input.txt', 'utf-8').split('\n');
const forrestMap = input.map(line => line.split(''));

//include a rotated version of the map where columns are rows
// const rotatedMap = forrestMap[0].map((_, i) => forrestMap.map(row => row[i]));

//create "empty" forest map
const emptyMap = forrestMap.map(row => row.map(_ => 0));
let sum = 0
//Part 1

// row left to right
for (let i = 1; i < forrestMap.length -1; i++) {

    let tallestFromLeft = forrestMap[i][0];

    for (let j = 1; j < forrestMap[0].length -1; j++) {

        if (tallestFromLeft < forrestMap[i][j] ) {
            emptyMap[i][j] = 1;
            tallestFromLeft = forrestMap[i][j];
    }
} }

for (let i = 1; i < forrestMap.length -1; i++) {

    let tallestFromRight = forrestMap[i][forrestMap[0].length -1];

    for (let j = forrestMap[0].length -2; j >= 1; j--) {

        if (tallestFromRight < forrestMap[i][j] ) {
            emptyMap[i][j] = 1;
            tallestFromRight = forrestMap[i][j];
    }
} }


// columns top to bottom
for (let i = 1; i < forrestMap[0].length -1; i++) {

    let tallestFromTop = forrestMap[0][i];

    for (let j = 1; j < forrestMap.length -1; j++) {

        if (tallestFromTop < forrestMap[j][i] ) {
            emptyMap[j][i] = 1;
            tallestFromTop = forrestMap[j][i];
    }
} }

// columns bottom to top
for (let i = 1; i < forrestMap[0].length -1; i++) {

        let tallestFromBottom = forrestMap[forrestMap.length -1][i];

        for (let j = forrestMap.length -2; j >= 1; j--) {

            if (tallestFromBottom < forrestMap[j][i] ) {
                emptyMap[j][i] = 1;
                tallestFromBottom = forrestMap[j][i];
        }
    } }


emptyMap.forEach(row => {

    sum += row.reduce((acc, curr) => acc + curr, 0)

})


console.log(forrestMap)
console.log(emptyMap)

console.log(sum)











/*
for (let i = 1; i < forrestMap.length -1; i++) {

    let tallestFromLeft = forrestMap[i][0];
    let tallestFromTop = rotatedMap[i][0];
    let tallestFromRight = forrestMap[i][forrestMap[0].length -1];
    let tallestFromBottom = forrestMap[i][forrestMap[0].length -1];

    //rows from left, columns from top
    for (let j = 1; j < forrestMap[0].length -1; j++) {

        //check if the current tree is taller than the tallest so far from the left OR
        //the tallest so far from the top by comparing the same sections but in the rotated map

        if (tallestFromLeft < forrestMap[i][j] ) {
            sum++; //increase the sum for either case
        } else if (tallestFromTop < rotatedMap[i][j]) { sum++; }


        if (tallestFromLeft < forrestMap[i][j]) {
            tallestFromLeft = forrestMap[i][j]; console.log(` Tallest from left    ${i} ${j}, Tree number ${tallestFromLeft}`) //update the tallest from the left if it actually changed
        } else if (tallestFromTop < rotatedMap[i][j]) {
            tallestFromTop = rotatedMap[i][j]; console.log(` Tallest from top    ${i} ${j}, which in coordinates from Left in Forrest Map is the same as ${j} ${i}, Tree number ${tallestFromTop}`) //update the tallest from the top if it actually changed
        }

    }
    //rows from right, columns from bottom
    for (let j = forrestMap[0].length -2; j >= 1; j--) {

        if (tallestFromRight < forrestMap[i][j]  ) {
            sum++;
        } else if (tallestFromBottom < rotatedMap[i][j]) { sum++; }

        if (tallestFromRight < forrestMap[i][j]) {
            tallestFromRight = forrestMap[i][j];
            console.log(` Tallest from right coordinates   ${i} ${j}, which in coordinates from the Left means ${i} ${j},`) //update the tallest from the right if it actually changed
        }else if (tallestFromBottom < rotatedMap[i][j]) {
            tallestFromBottom = rotatedMap[i][j]; console.log(` Tallest from bottom    ${i} ${j} , which in coordinates from left in Forrest Map is the same as ${j} ${i}, Tree number ${tallestFromBottom}`) //update the tallest from the bottom if it actually changed
        }
    }

}
*/