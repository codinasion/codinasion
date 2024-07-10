import Foundation

/**
 This Swift program calculates the average of digits of a given number.
 
 - Parameters:
   - number: The input number for which the average of digits is to be calculated.
 - Returns: The average of digits.

Sample Input:
Enter a number:
123

Sample Output:
Average of digits: 2.0

 */
func averageOfDigits(of number: Int) -> Double {
    var sumOfDigits = 0
    var numberOfDigits = 0
    var tempNumber = number
    
    while tempNumber > 0 {
        sumOfDigits += tempNumber % 10
        tempNumber /= 10
        numberOfDigits += 1
    }
    
    return numberOfDigits > 0 ? Double(sumOfDigits) / Double(numberOfDigits) : 0
}

// Main program
print("Enter a number:")
if let userInput = readLine(), let inputNumber = Int(userInput) {
    let averageResult = averageOfDigits(of: inputNumber)
    print("Average of digits: \(averageResult)")
} else {
    print("Invalid input. Please enter a valid number.")
}
