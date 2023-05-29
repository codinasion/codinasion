function sumOfNumbersByRecursion(num) {
    let sum = 0;
    if (num > 0) {
        sum = (num % 10) + sumOfNumbersByRecursion(Math.floor(num / 10));
    }
    return sum;
}

console.log(sumOfNumbersByRecursion(12345));
