function reverseWords(input: string): string {
    const words = input.split(' ');
    const reversedWords = words.reverse().join(' ');
    return reversedWords;
}

const input = "Hello World";
console.log(reverseWords(input))
