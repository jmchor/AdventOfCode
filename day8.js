const input = require('fs').readFileSync('./d8_input.txt', 'utf-8').split('\n');
const forrestMap = input.map(line => line.split(''));

//Part 1

let sum = 0;

//columns
for (let i = 1; i < forrestMap.length; i++) {

    //rows
    for (let j = 1; j < forrestMap[0].length; j++) {

        //determine if j is bigger than every item before it OR if js is bigger than every item after it

        if(


    }



}