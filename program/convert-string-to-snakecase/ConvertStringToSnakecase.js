function Snakecase(str) {
    let givenString = str.split('');
    for (let i = 0; i < givenString.length; i++) {
        if (givenString[i] == " ") {
            givenString[i] = "_";
        }
    }
    givenString = givenString.join('');
    return console.log(givenString);
}

Snakecase("hello world");
