function findQuadEquationRoots(a, b, c) {
    if (!a) throw new Error('Not a quadratic equation!')

    const descriminant = b ** 2 - 4 * a * c
    const solutionPart1 = -b / 2*a

    if (!descriminant) return solutionPart1
    if (descriminant < 0) throw new Error('No Solution!')

    const solutionPart2 = descriminant ** 0.5 / 2*a
    
    const solutions = [solutionPart1 + solutionPart2, solutionPart1 - solutionPart2]

    return solutions
}

const solutions = findQuadEquationRoots(1, -5, 6)
console.log(solutions)
