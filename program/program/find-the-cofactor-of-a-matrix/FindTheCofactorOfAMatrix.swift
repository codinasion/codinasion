import Foundation

class Matrix {
    let rows: Int
    let columns: Int
    var grid: [[Double]]

    init(rows: Int, columns: Int) {
        self.rows = rows
        self.columns = columns
        self.grid = [[Double]](repeating: [Double](repeating: 0.0, count: columns), count: rows)
    }

    init(grid: [[Double]]) {
        self.rows = grid.count
        self.columns = grid[0].count
        self.grid = grid
    }

    func printMatrix() {
        for i in 0..<rows {
            print(grid[i])
        }
    }

    func minorMatrix(row: Int, column: Int) -> Matrix {
        var minor = [[Double]]()

        for i in 0..<rows {
            if i != row {
                var minorRow = [Double]()
                for j in 0..<columns {
                    if j != column {
                        minorRow.append(grid[i][j])
                    }
                }
                minor.append(minorRow)
            }
        }

        return Matrix(grid: minor)
    }

    func determinant() -> Double {
        guard rows == columns else {
            fatalError("Matrix must be square to calculate determinant")
        }

        if rows == 1 {
            return grid[0][0]
        }

        if rows == 2 {
            return grid[0][0] * grid[1][1] - grid[0][1] * grid[1][0]
        }

        var det = 0.0
        for i in 0..<columns {
            let minorMatrix = self.minorMatrix(row: 0, column: i)
            det += grid[0][i] * pow(-1.0, Double(i)) * minorMatrix.determinant()
        }
        return det
    }

    func cofactorMatrix() -> Matrix? {
        guard rows == columns else {
            print("Error: Cofactor matrix can only be calculated for square matrices")
            return nil
        }

        var cofactor = [[Double]]()
        for i in 0..<rows {
            var cofactorRow = [Double]()
            for j in 0..<columns {
                let minorDet = minorMatrix(row: i, column: j).determinant()
                cofactorRow.append(pow(-1.0, Double(i + j)) * minorDet)
            }
            cofactor.append(cofactorRow)
        }

        return Matrix(grid: cofactor)
    }
}

let inputMatrix = Matrix(grid: [[1.0, 2.0, 3.0],
                                [4.0, 5.0, 6.0],
                                [7.0, 8.0, 9.0]])

if let cofactorMatrix = inputMatrix.cofactorMatrix() {
    print("Cofactor Matrix:")
    cofactorMatrix.printMatrix()
}
