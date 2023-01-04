function convertToHex(decimalNumber) {
  let remaindersSequence = [];
  let remainder = decimalNumber % 16;
  let quotient = Math.floor(decimalNumber / 16);
  remaindersSequence.push(remainder);

  do {
    remainder = quotient % 16;
    quotient = Math.floor(quotient / 16);

    if (remainder > 0)
      remaindersSequence.push(remainder);
  } while (remainder !== 0);

  return remaindersSequence.reverse().join(' ');
}

console.log(convertToHex(1500));
