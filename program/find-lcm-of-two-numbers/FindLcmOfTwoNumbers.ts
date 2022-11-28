const number1: number = 10
const number2: number = 12

function findLcm(number1: number, number2: number): number {
    let temp: number = 0
    let val1: number = number1
    let val2: number = number2

    // Find the greatest common denominator
    while (val2) {
        temp = val2
        val2 = val1 % val2
        val1 = temp
    }
    const GCD: number = val1

    return number1 * number2 / GCD
}

findLcm(number1, number2)