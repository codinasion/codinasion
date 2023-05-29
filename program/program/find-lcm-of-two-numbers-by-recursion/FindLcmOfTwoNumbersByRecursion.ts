export type FirstNumber = number
export type SecondNumber = number
export type LCM = number

export function findLcmOfTwoNumbersByRecursion(first: FirstNumber, second: SecondNumber, lcm: LCM = 1): LCM {
    if(lcm % first === 0 && lcm % second === 0) return lcm

    return findLcmOfTwoNumbersByRecursion(first, second, ++lcm)
}