import Foundation

func convertToPascalCase(_ input: String) -> String {
    // Split the string into words separated by spaces or punctuation using a character set
    let words = input.components(separatedBy: CharacterSet.alphanumerics.inverted).filter { !$0.isEmpty }
    
    // Capitalize the first letter of each word and concatenate them
    let pascalCase = words.map { $0.capitalized }.joined()
    
    return pascalCase
}

// Taking input from the user
print("Please enter a string to convert to PascalCase:")
if let input = readLine() {
    let pascalCaseOutput = convertToPascalCase(input)
    print("PascalCase Output: \(pascalCaseOutput)")
} else {
    print("Failed to read input.")
}
