// Javascript program to convert a String to an Integer

function convertWithUnary(str) {
    // converts string representations of integers or decimals
    return +str;
}

function parseInteger(str, radix = 0) {
    // radix is an integer between 2 - 36
    return parseInt(str, radix);
}

function floor(str) {
    return Math.floor(str);
}

function round(str) {
    return Math.round(str);
}


// Examples:

console.log(convertWithUnary("2342")); // 2342
console.log(convertWithUnary("234.67")); // 234.67

console.log(Number('1234')); // 1234 - native JS Number Method
console.log(~~'1234') // 1234 - Double Tilde - bitwise negation

console.log(parseInteger('321')); // 321
console.log(parseInteger('234.33')) // 234
console.log(parseInteger('6234sadf')) // 6234 - converts numbers in the string untill alphabets/special characters are found
console.log(parseInteger('0xD')); // 13 - converts 0xD hexadecimal-base 16 with Decimal base 10
console.log(parseInteger('0xD', 2)); // 0 - converts 0xD hexadecimal with radix 2
console.log(parseInteger('0xD', 36)); // 1201 - converts 0xD hexadecimal with radix 36
console.log(parseInteger('0xD', 42)); // NaN - returns Nan with radix out of range

console.log(floor('234.234')) // 234 // rounds down to the integer less than or equal to the given value
console.log(floor('234.999')) // 234 // rounds down to the integer less than or equal to the given value
console.log(floor('234adf.234')) // NaN // works only on string representations of numbers

console.log(round('234.234')) // 234 // rounds to the nearest integer
console.log(round('234.999')) // 235 // rounds to the nearest integer
console.log(round('234adf.234')) // NaN // works only on string representations of numbers
