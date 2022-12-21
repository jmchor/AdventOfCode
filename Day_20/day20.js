let encrypted = [1, 2, -3, 3, -2, 0, 4];

let mixed = [...encrypted];

  for (let i = 0; i < encrypted.length; i++) {
    let currentPos = encrypted.indexOf(encrypted[i]);
    let newPos = (currentPos + encrypted[i]) % encrypted.length;
    mixed[newPos] = encrypted[i];
  }



console.log(mixed);