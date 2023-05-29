function convertHexadecimalToOctal(hex: string) : string{
    const decimal: number = parseInt(hex,16);
    return decimal.toString(8);
}

const input = 'A';
console.log(`Hexadecimal '${input}' in octal is: '${convertHexadecimalToOctal(input)}'`);