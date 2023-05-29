function octalToDecimal(n) {

    let dec_value = 0;
    let base = 1;

    let temp = n;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
        dec_value += last_digit * base;
        base = base * 8;
    }

    return dec_value;
}

console.log(octalToDecimal(69));
console.log(octalToDecimal(69420));
