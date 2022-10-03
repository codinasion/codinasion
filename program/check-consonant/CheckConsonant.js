function checkConsonants(str) {
    let consonant = '';
    if (str != 'a' && str != 'e' && str != 'i' && str != 'o' && str != 'u') {
        consonant = 'Consonant'
    }
    else {
        consonant = 'Is not a Consonant'
    }
    return consonant;
}

console.log("Given string is", checkConsonants("b"));
