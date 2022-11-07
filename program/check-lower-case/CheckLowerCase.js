function checkLowerCase(str) {
    let asciiValue = str.charCodeAt(0);

    if (asciiValue >= 97 && asciiValue <= 123) {
        console.log("It is Lower Case");
    }
    else {
        console.log("It is not Lower Case");
    }
}

checkLowerCase("a");
