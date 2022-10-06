function checkEvenOrOdd(num) {
    let checkEvenorOdd = ''
    if (num % 2 === 0) {
        checkEvenorOdd = "Even Number";
    }
    else {
        checkEvenorOdd = "Odd Number";
    }
    return checkEvenorOdd;
}

console.log("The number is", checkEvenOrOdd(10));
