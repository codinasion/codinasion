function binaryToOctal (num) {
   let octalValue = parseInt(num, 2).toString(8);
   return octalValue;
}

binaryToOctal(1010);

console.log("Binary to Octal", binaryToOctal(1010));
