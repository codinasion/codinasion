function checkConsonants(str: string) {
    let consonant = '';
    if (str != 'a' && str != 'e' && str != 'i' && str != 'o' && str != 'u' && str != 'A' && str != 'E' && str != 'I' && str != 'O' && str != 'U') {
        consonant = 'Consonant'
    }
    else {
        consonant = 'Is not a Consonant'
    }
    return consonant;
}

console.log(checkConsonants("j"));
