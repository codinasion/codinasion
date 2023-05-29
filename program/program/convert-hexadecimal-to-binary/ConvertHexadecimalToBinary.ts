function convertHexaDecimalToBinary(hex: string) {

    return (parseInt(hex, 16).toString(2)).padStart(4, '0');

}

console.log(convertHexaDecimalToBinary("A")) // 1010