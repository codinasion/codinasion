import Foundation

/**
 This Swift program converts a given string to sentence case, where only the first letter of the first word is capitalized.
 
 - Parameters:
   - input: The input string to be converted to sentence case.
 - Returns: The string in sentence case.
 
Sample Input:
Enter a string:
hello world

Sample Output:
String in Sentence Case: Hello world

 */
func stringToSentenceCase(input: String) -> String {
    guard let firstLetter = input.first else {
        return input
    }

    return String(firstLetter.uppercased()) + String(input.dropFirst())
}

// Main program
print("Enter a string:")
if let userInput = readLine() {
    let sentenceCaseResult = stringToSentenceCase(input: userInput)
    print("String in Sentence Case: \(sentenceCaseResult)")
} else {
    print("Invalid input. Please enter a valid string.")
}
