function findDigitalRoot(num: any): number {
    let digitalRoot = 0;

    if (num != 0) {
        digitalRoot = (num % 10) + findDigitalRoot(Math.floor(num / 10))
    }

    if (digitalRoot > 9) {
        digitalRoot = (digitalRoot % 10) + findDigitalRoot(Math.floor(digitalRoot / 10))
    }
    return digitalRoot;
}

console.log(findDigitalRoot(1234));
