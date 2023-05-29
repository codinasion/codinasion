export function findPowerOfANumberByRecursion(number, power, poweredNumber = number, counter = 1) {
    if(power === 0) return 1

    if(power === counter) return poweredNumber

    return findPowerOfANumberByRecursion(number, power, poweredNumber * number,  ++counter)
}