/** 
* @param {number} binaryNumber - the binary number to convert, in number form (not string)
* @returns {number} the converted number in decimal 
*/

function convertBinaryToDecimal(binaryNumber){
    const digitsArray = binaryNumber.toString().split('')

    const numberOfDigits = digitsArray.length

    const multiplicatedDigits = digitsArray.map((digit, index) => {
        let power = numberOfDigits - index - 1
        return parseInt(digit) * Math.pow(2, power)
    })

    const resultSum = multiplicatedDigits.reduce((total, accumulator) => {
        return total + accumulator
    }, 0)

    return resultSum
}

/** 
// Test Cases
console.log(convertBinaryToDecimal(1010))
// should return 10
console.log(convertBinaryToDecimal(1111))
// should return 15
*/