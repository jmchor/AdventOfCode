let referenceArray = [1, 2, -3, 3, -2, 0, 4]
let currentArray = [ ...referenceArray ]
let previousArray = [ ...currentArray ]


for (let i = 0; i < referenceArray.length; i++) {

  let moveNumber = currentArray.splice(currentArray.indexOf(referenceArray[i]), 1)


  currentArray.splice((previousArray.indexOf(moveNumber[0]) + moveNumber[0] + currentArray.length) % currentArray.length,0, moveNumber[0])

  previousArray = [...currentArray]

console.log(currentArray)
}

