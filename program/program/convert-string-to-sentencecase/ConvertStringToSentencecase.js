function sentenceCase(str) {
    return  str.charAt(0).toUpperCase() + str.slice(1);
}

const result = sentenceCase('hello world');
console.log(result);
