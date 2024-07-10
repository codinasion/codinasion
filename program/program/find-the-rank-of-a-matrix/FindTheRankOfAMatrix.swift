import Foundation

func findRankOfMatrix(_ matrix: [[Double]]) -> Int {
    var mat = matrix
    let rowCount = mat.count
    let colCount = mat[0].count
    var rank = 0

    for row in 0..<colCount {
        if row < rowCount {
            var swapRow = row
            while mat[swapRow][row] == 0 {
                swapRow += 1
                if swapRow == rowCount {
                    swapRow = row
                    break
                }
            }
            mat.swapAt(row, swapRow)

            if mat[row][row] != 0 {
                for i in (row+1)..<rowCount {
                    let factor = mat[i][row] / mat[row][row]
                    for j in row..<colCount {
                        mat[i][j] -= factor * mat[row][j]
                    }
                }
                rank += 1
            }
        }
    }

    return rank
}

// Example usage
let matrix = [
    [1.0, 2.0, 3.0],
    [4.0, 5.0, 6.0],
    [7.0, 8.0, 9.0]
]

let rank = findRankOfMatrix(matrix)
print("Rank of the matrix: \(rank)")
