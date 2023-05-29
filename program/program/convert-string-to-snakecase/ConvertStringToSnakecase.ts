function snakecase(str: any) {
    let givenString = str.split('');
    for (let i = 0; i < givenString.length; i++) {
        if (givenString[i] === " ") {
            givenString[i] = "_";
        }
    }
    givenString = givenString.join('');
    return console.log(givenString);
}

snakecase("hello world");
