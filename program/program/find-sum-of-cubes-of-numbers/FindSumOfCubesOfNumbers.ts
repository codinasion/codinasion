function sumOfCubeOfNumbers(num: number): number {
    if (num === 0) {
        return 0
    }
    else {
        return Math.pow((num % 10), 3) + sumOfCubeOfNumbers(Math.floor(num / 10));
    }
}

console.log("Sum of Cube of numbers", sumOfCubeOfNumbers(12345));
