//Write a JavaScript program to reverse words in a string #5007
//Input  : "Hello World"
//Output : "World Hello"

const string = "Hello World"

function reverseString(str) {
    const reversedWords = str.split(' ').reverse().join(' ');
    return reversedWords
}

console.log("String reverse:", reverseString(string));