const input = require('fs').readFileSync('./d6_input.txt', 'utf-8').split('');

//push every letter of input array into a new array
//check if the last four letters in the new array are unique by creating a temporary array with the last four letters and check it against a new Set


for (let i = 0; i < input.length; i++) {
    let temp = input.slice(i, i + 4); //create a temporary array with the first four indexes of the input array (slice at Index 0, stop excluding Index 4 etc)
    let set = new Set(temp); //Set objects are collections of values that are unique by definition
    if (set.size === 4) { //the Set size will not grow to four if there are duplicate letters in the temporary array; hence, if it is four, there are four unique letters in there, and the loop can be stopped

        console.log(i+4); //will give the number of all letters that go before the first four unique letters (including the first four unique letters)
        console.log(temp);
        break;
    }
}
