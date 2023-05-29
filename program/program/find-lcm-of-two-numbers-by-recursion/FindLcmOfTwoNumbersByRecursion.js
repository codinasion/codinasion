export function findLcmOfTwoNumbersByRecursion(first, second, lcm = 1) {
    if(lcm % first === 0 && lcm % second === 0) return lcm

    return findLcmOfTwoNumbersByRecursion(first, second, ++lcm)
}