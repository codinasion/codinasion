import Foundation

func determinant(of matrix: [[Int]]) -> Int {
    if matrix.count == 1 {
        return matrix[0][0]
    } else if matrix.count == 2 {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    } else {
        var det = 0
        for (index, element) in matrix[0].enumerated() {
            var smallerMatrix = matrix
            smallerMatrix.remove(at: 0)
            for i in 0..<smallerMatrix.count {
                smallerMatrix[i].remove(at: index)
            }
            det += element * determinant(of: smallerMatrix) * (index % 2 == 0 ? 1 : -1)
        }
        return det
    }
}

func cofactor(of matrix: [[Int]]) -> [[Int]] {
    var cofactors = Array(repeating: Array(repeating: 0, count: matrix.count), count: matrix.count)
    
    for row in 0..<matrix.count {
        for col in 0..<matrix.count {
            var minor = matrix
            minor.remove(at: row)
            for i in 0..<minor.count {
                minor[i].remove(at: col)
            }
            let cofactorValue = determinant(of: minor) * ((row + col) % 2 == 0 ? 1 : -1)
            cofactors[row][col] = cofactorValue
        }
    }
    
    return cofactors
}

func transpose(of matrix: [[Int]]) -> [[Int]] {
    var transposed = Array(repeating: Array(repeating: 0, count: matrix.count), count: matrix[0].count)
    for i in 0..<matrix.count {
        for j in 0..<matrix[i].count {
            transposed[j][i] = matrix[i][j]
        }
    }
    return transposed
}

func adjoint(of matrix: [[Int]]) -> [[Int]] {
    let cofactorsMatrix = cofactor(of: matrix)
    return transpose(of: cofactorsMatrix)
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let adjMatrix = adjoint(of: matrix)
print(adjMatrix)
