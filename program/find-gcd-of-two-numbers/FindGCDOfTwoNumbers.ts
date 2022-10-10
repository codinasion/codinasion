function findGCD(number1: number, number2: number): number {

    let result:number = Math.min(number1, number2);
    while (result > 0) {
        if (number1 % result == 0 && number2 % result == 0) {
            break;
        }
        result--;
    }
    return result; // return GCD between number1 and number2
}

findGCD(12,18)
