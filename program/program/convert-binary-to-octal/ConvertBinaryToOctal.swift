import Foundation

func binaryToOctal(_ binaryString: String) -> String {
    guard let decimalValue = Int(binaryString, radix: 2) else {
        return "Invalid binary number"
    }
    return String(decimalValue, radix: 8)
}

// Example
let binaryNumber = "1010"
let octalNumber = binaryToOctal(binaryNumber)
print("Binary \(binaryNumber) in octal is \(octalNumber)")
