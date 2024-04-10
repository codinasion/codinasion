func transpose(matrix: [[Int]]) -> [[Int]] {
    // Guard against empty matrix
    guard !matrix.isEmpty else { return [[]] }

    let rowCount = matrix.count
    let colCount = matrix[0].count

    // Initialize an empty matrix for the transpose
    var transposedMatrix = Array(repeating: Array(repeating: 0, count: rowCount), count: colCount)

    // Iterate through the matrix and swap rows with columns
    for row in 0..<rowCount {
        for col in 0..<colCount {
            transposedMatrix[col][row] = matrix[row][col]
        }
    }

    return transposedMatrix
}

// Example usage
let inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let outputMatrix = transpose(matrix: inputMatrix)
print("Output:")
for row in outputMatrix {
    print(row.map { String($0) }.joined(separator: " "))
}
