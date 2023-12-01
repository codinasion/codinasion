import Foundation
/*

This Swift program calculates the average of a list of numbers using recursion. The user is prompted to input a series of numbers separated by spaces. The program then employs a recursive algorithm to compute the sum of the provided numbers, and subsequently, calculates and displays their average. In the event of invalid input, the program notifies the user and prompts for a valid list of numbers. This implementation is designed for simplicity and educational purposes, offering a basic example of recursive function usage in Swift.

Sample Input:
    Enter a list of numbers separated by spaces:
    5.0 10.0 15.0 20.0

Sample Output:
    Numbers: [5.0, 10.0, 15.0, 20.0]
    Average: 12.5

*/



func calculateAverage(numbers: [Double]) -> Double {
    return sumOfNumbers(numbers: numbers) / Double(numbers.count)
}

func sumOfNumbers(numbers: [Double]) -> Double {
    guard let firstNumber = numbers.first else {
        return 0
    }
    let remainingNumbers = Array(numbers.dropFirst())
    return firstNumber + sumOfNumbers(numbers: remainingNumbers)
}

// Get input from the user
print("Enter a list of numbers separated by spaces:")
if let input = readLine(), !input.isEmpty {
    let numbers = input.split(separator: " ").compactMap { Double($0) }
    
    if !numbers.isEmpty {
        let average = calculateAverage(numbers: numbers)
        print("Numbers: \(numbers)")
        print("Average: \(average)")
    } else {
        print("Invalid input. Please enter valid numbers.")
    }
} else {
    print("Invalid input. Please enter valid numbers.")
}
