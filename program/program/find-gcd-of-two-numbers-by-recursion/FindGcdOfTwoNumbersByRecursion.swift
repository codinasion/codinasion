import Foundation

func gcd(_ a: Int, _ b: Int) -> Int {
    if b == 0 {
        return a
    } else {
        return gcd(b, a % b)
    }
}

// Example usage
let num1 = 12
let num2 = 18
let result = gcd(num1, num2)
print("GCD of \(num1) and \(num2) is \(result)")
