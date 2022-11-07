import Foundation

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var determinant = 0, counterForSign = 0

for index in 0..<3 {
    var part1 = matrix[1]
    var part2 = matrix[2]
    part1.remove(at: index)
    part2.remove(at: index)
    let adj = (part1[0] * part2[1]) - (part1[1] * part2[0])
    if (counterForSign == 0) {
        determinant += matrix[0][index] * adj
        counterForSign += 1
    } else {
        determinant -= matrix[0][index] * adj
        counterForSign -= 1
    }
}

print(determinant)