//Write a Swift program to check integer or float
import Foundation

func checkNumberType(_ number: String) -> String {
    if let integerValue = Int(number) {
        return "Integer"
    } else if let floatValue = Float(number) {
        return "Float"
    } else {
        return "Not a valid number"
    }
}

if let userInput = readLine() {
    let result = checkNumberType(userInput)
    print("Input: \(userInput)\nOutput: \(result)")
} else {
    print("Invalid input")
}