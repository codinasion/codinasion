import Foundation

func eigenvalues(ofMatrix matrix: [[Double]]) -> [Double] {
    let size = matrix.count
    var a = matrix
    var q = Array(repeating: Array(repeating: 0.0, count: size), count: size)
    for i in 0..<size {
        q[i][i] = 1.0
    }

    for i in 0..<50 {
        var maxIndex = i
        var maxValue = abs(a[i][i])
        for row in i + 1..<size {
            if abs(a[row][i]) > maxValue {
                maxIndex = row
                maxValue = abs(a[row][i])
            }
        }

        if maxValue < 1e-10 {
            break
        }

        if maxIndex != i {
            (a[i], a[maxIndex]) = (a[maxIndex], a[i])
            (q[i], q[maxIndex]) = (q[maxIndex], q[i])
        }

        for row in i + 1..<size {
            let factor = a[row][i] / a[i][i]
            for col in i..<size {
                a[row][col] -= factor * a[i][col]
            }
            for col in 0..<size {
                q[row][col] -= factor * q[i][col]
            }
        }
    }

    var eigenValues = [Double](repeating: 0.0, count: size)
    for i in 0..<size {
        eigenValues[i] = a[i][i]
    }

    return eigenValues
}

func getInput() -> [[Double]] {
    let rows = 3
    print("Input:")
    var matrix = [[Double]](repeating: [Double](repeating: 0.0, count: rows), count: rows)
    for i in 0..<rows {
        let values = readLine()!.split(separator: " ").map { Double($0)! }
        matrix[i] = Array(values)
    }
    return matrix
}

let matrix = getInput()
let eigenValues = eigenvalues(ofMatrix: matrix)
print("Output: \(eigenValues)") 
