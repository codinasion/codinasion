import Foundation

func sumOfGP(a1: Double, r: Double, n: Int) -> Double {
    if r == 1 {
        // If the common ratio is 1, use the simple formula for sum of n terms of an AP
        return a1 * Double(n)
    } else {
        // Calculate the sum using the GP sum formula
        return a1 * (1 - Foundation.pow(r, Double(n))) / (1 - r)
    }
}

// Example usage with the given input
let a1 = 2.0   // First term
let r = 3.0    // Common ratio
let n = 3      // Number of terms

let result = sumOfGP(a1: a1, r: r, n: n)
print("Sum of the GP series:", result)
