import Foundation

func convertToConstantCase(input: String) -> String {
    return input.uppercased().replacingOccurrences(of: " ", with: "_")
}

// Taking input from the user
print("Enter a string: ", terminator: "")
if let userInput = readLine() {
    let output = convertToConstantCase(input: userInput)
    print("Constant Case: \(output)")
} else {
    print("Invalid input")
}