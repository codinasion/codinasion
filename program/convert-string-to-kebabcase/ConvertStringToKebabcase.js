function kebabCase() {
    let givenString = str.split('');
    for (let i = 0; i < givenString.length; i++) {
        if (givenString[i] == " ") {
            givenString[i] = "-";
        }
    }
    givenString = givenString.join('');
    return console.log(givenString);
}

kebabCase("hello world");
