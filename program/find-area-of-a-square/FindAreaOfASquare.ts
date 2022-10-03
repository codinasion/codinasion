export type SquareSide = number
export type SquareArea = number

export function findAreaOfSquare(side: SquareSide): SquareArea {
    return Math.pow(side, 2)
}