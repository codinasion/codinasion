function convertToHex(decimalNumber) {
    let quotient
    let remaindersSequence = []
    let remainder = decimalNumber / 16
    remaindersSequence.push(remainder)
  
    do {
      quotient = decimalNumber - remainder
      remainder = quotient / 16
      remaindersSequence.push(remainder)
    } while (remainder !== 0)
  
    console.log(remaindersSequence.reverse())
  }
  
  convertToHex(110);
  