function binaryToHexaDecimal(num) {
    return parseInt(num, 2).toString(16).toUpperCase();
}

console.log("Binary to HexaDecimal", binaryToHexaDecimal('1011'));
