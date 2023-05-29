function isCharacterALetter(char: string): string {
    return (/[a-zA-Z]/).test(char) ? 'Alphabet' : 'Not Alphabet';
}

console.log(isCharacterALetter('a'));
console.log(isCharacterALetter('Z'));
console.log(isCharacterALetter('!'));