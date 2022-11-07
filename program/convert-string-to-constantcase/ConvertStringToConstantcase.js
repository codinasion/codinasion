function stringToConstantcase(str) {
    let splitLettersArray = str.toUpperCase().split('');

    for (let i = 0; i < splitLettersArray.length; i++) {
        if(splitLettersArray[i] === " ") {
            splitLettersArray[i] = "_";
        }
    }

    console.log(splitLettersArray.join(''));

}

stringToConstantcase("hello world");
