import Foundation

func traceOfMatrix(_ matrix: [[Int]]) -> Int {
    var trace = 0

    for i in 0..<matrix.count {
        trace += matrix[i][i]
    }

    return trace
}

// Example matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Calculate and print the trace
let trace = traceOfMatrix(matrix)
print("Trace of the matrix: \(trace)")
