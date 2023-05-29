function checkVowels(str: string) {
    let isVowel = '';
    if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' || str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U') {
        isVowel = 'Vowel'
    }
    else {
        isVowel = 'Is not a Vowel'
    }
    return isVowel;
}

console.log(checkVowels("U"));
