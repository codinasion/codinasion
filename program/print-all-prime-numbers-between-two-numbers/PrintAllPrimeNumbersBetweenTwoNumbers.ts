function printPrimeNumber(num1: number, num2: number) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printPrimeNumber(10, 13);
