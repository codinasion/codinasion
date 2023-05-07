import Foundation

func findRoots(a: Double, b: Double, c: Double) -> (Double, Double) {
    let delta = b * b - 4 * a * c
    let sqrtDelta = sqrt(abs(delta))
    let root1 = (-b + sqrtDelta) / (2 * a)
    let root2 = (-b - sqrtDelta) / (2 * a)
    return (root1, root2)
}

let input = "1 2 1"
let coefficients = input.components(separatedBy: " ").compactMap(Double.init)
let (root1, root2) = findRoots(a: coefficients[0], b: coefficients[1], c: coefficients[2])
print("\(root1) \(root2)")
