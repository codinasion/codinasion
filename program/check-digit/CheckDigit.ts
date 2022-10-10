function isDigit(char: string): string {
    return (/[a-zA-Z]/).test(char) ? 'Not a Number' : 'Number';
}

console.log(isDigit("3"))
console.log(isDigit("i"))