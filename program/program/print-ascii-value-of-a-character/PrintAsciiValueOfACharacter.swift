import Foundation

/**
 This Swift program prints the ASCII value of a given character.
 
 - Parameters:
   - character: The input character for which the ASCII value is to be printed.
Sample Input:
Enter a character:
A

Sample Output:
ASCII value of 'A': 65
 */
func printAsciiValue(of character: Character) {
    let asciiValue = character.asciiValue
    print("ASCII value of '\(character)': \(asciiValue ?? 0)")
}

// Main program
print("Enter a character:")
if let userInput = readLine(), let inputCharacter = userInput.first {
    printAsciiValue(of: inputCharacter)
} else {
    print("Invalid input. Please enter a valid character.")
}
