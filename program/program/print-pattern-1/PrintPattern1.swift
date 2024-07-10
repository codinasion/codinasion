import Foundation

// Function to print the pattern
func printPattern(upTo n: Int) {
    for i in 1...n {
        for j in 1...i {
            print(j, terminator: " ")
        }
        print()
    }
}

// Reading user input
print("Enter a number: ", terminator: "")
if let input = readLine(), let number = Int(input) {
    printPattern(upTo: number)
} else {
    print("Invalid input")
}
