export type Octal = number
export type Decimal = number

export function convertOctalToDecimal(octal: Octal): Decimal {
    let decimal: number = 0;
    let base = 1
    const octits = `${octal}`.split('')

    for(let i = octits.length - 1; i >= 0; i--) {
        decimal += +octits[i] * base
        base *= 8
    }

    return decimal
}