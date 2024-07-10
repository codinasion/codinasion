import Foundation

func inverse(of matrix: [[Double]]) -> [[Double]]? {
    let det = matrixDeterminant(matrix)
    if det == 0 { return nil }

    let adj = matrixAdjoint(matrix)
    let inv = adj.map { row in row.map { $0 / det } }
    return inv
}

func matrixDeterminant(_ matrix: [[Double]]) -> Double {
    let a = matrix[0][0], b = matrix[0][1], c = matrix[0][2]
    let d = matrix[1][0], e = matrix[1][1], f = matrix[1][2]
    let g = matrix[2][0], h = matrix[2][1], i = matrix[2][2]

    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
}

func matrixAdjoint(_ matrix: [[Double]]) -> [[Double]] {
    let a = matrix[0][0], b = matrix[0][1], c = matrix[0][2]
    let d = matrix[1][0], e = matrix[1][1], f = matrix[1][2]
    let g = matrix[2][0], h = matrix[2][1], i = matrix[2][2]

    let cofactorMatrix: [[Double]] = [
        [e * i - f * h, c * h - b * i, b * f - c * e],
        [f * g - d * i, a * i - c * g, c * d - a * f],
        [d * h - e * g, b * g - a * h, a * e - b * d]
    ]

    return transposeMatrix(cofactorMatrix)
}

func transposeMatrix(_ matrix: [[Double]]) -> [[Double]] {
    if matrix.isEmpty { return matrix }
    var transposedMatrix = Array(repeating: Array(repeating: 0.0, count: matrix.count), count: matrix[0].count)

    for (i, row) in matrix.enumerated() {
        for (j, element) in row.enumerated() {
            transposedMatrix[j][i] = element
        }
    }

    return transposedMatrix
}

// Example
let matrix = [
    [2.0, -1.0, 0.0],
    [-1.0, 2.0, -1.0],
    [0.0, -1.0, 2.0]
]

if let inverseMatrix = inverse(of: matrix) {
    print("Inverse of the matrix:")
    inverseMatrix.forEach { print($0) }
} else {
    print("The matrix doesn't have an inverse.")
}
