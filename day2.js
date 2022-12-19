/* eslint-disable array-callback-return */
const input = require('fs').readFileSync('./d2_input.txt', 'utf-8').split('\n');

const inputArray = input.map((data) => data.split(' ').map((element) => element));
const numArray = inputArray.map((elem) =>
        elem.map((item) => {
                if (item === 'A' || item === 'X') return 1;
                if (item === 'B' || item === 'Y') return 2;
                if (item === 'C' || item === 'Z') return 3;
        })
);

const sumArray = numArray.map((elem) => {
        for (let i = 0; i < elem.length; i++) {
                // you win

                if (elem[i + 1] === 3 && elem[i] === 2) return 9;
                if (elem[i + 1] === 3 && elem[i] === 1) return 8;
                if (elem[i + 1] === 3 && elem[i] === 3) return 7;

                if (elem[i + 1] === 1 && elem[i] === 2) return 1;
                if (elem[i + 1] === 1 && elem[i] === 1) return 3;
                if (elem[i + 1] === 1 && elem[i] === 3) return 2;

                if (elem[i + 1] === 2 && elem[i] === 1) return elem[i] + 3;
                if (elem[i + 1] === 2 && elem[i] === 2) return elem[i] + 3;
                if (elem[i + 1] === 2 && elem[i] === 3) return elem[i] + 3;
        }
});

console.log(sumArray.reduce((a, b) => a + b, 0));

/*



if (elem[i + 1] === 1 && elem[i] === 3 || elem[i + 1] === 1 && elem[i] === 2 || elem[i + 1] === 1 && elem[i] === 1) {return 2 || 1 || 3}
else if (elem[i + 1] === 2 && elem[i] === 3 || elem[i + 1] === 2 && elem[i] === 2 || elem[i + 1] === 2 && elem[i] === 1) {return elem[i] + 3}
else if (elem[i + 1] === 3 && elem[i] === 3 || elem[i + 1] === 3 && elem[i] === 2 || elem[i + 1] === 3 && elem[i] === 1) {return 1 || 3 || 2}




*/
