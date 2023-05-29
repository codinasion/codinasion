function FindSumOfCubesOfNumbersByRecursion(num: number): number {
    let sumOfCubesOfNumber = 0;
    if (num > 0) {
        sumOfCubesOfNumber = Math.pow((num % 10), 3) + FindSumOfCubesOfNumbersByRecursion(Math.floor(num / 10));
    }
    return sumOfCubesOfNumber;
}

console.log(FindSumOfCubesOfNumbersByRecursion(12345));
