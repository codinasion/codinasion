import Foundation

func power(base: Int, exponent: Int) -> Int {
    // Base case
    if exponent == 0 {
        return 1
    }
    // Recursive case
    return base * power(base: base, exponent: exponent - 1)
}

// Example usage
let base = 2
let exponent = 3
let result = power(base: base, exponent: exponent)
print("The power of \(base) raised to \(exponent) is \(result)")
