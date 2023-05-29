function convertHexadecimalToOctal(hex){
    const decimal = parseInt(hex,16);
    return decimal.toString(8);
}

let input = 'A';
console.log(`Hexadecimal '${input}' in octal is: '${convertHexadecimalToOctal(input)}'`);