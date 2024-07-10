func sumOfSquares(_ numbers: [Int], _ index: Int = 0) -> Int {
    // Base case: when index reaches the end of the array
    if index >= numbers.count {
        return 0
    }
    // Recursive case: square the current number and add to the sum of squares of the rest
    return numbers[index] * numbers[index] + sumOfSquares(numbers, index + 1)
}

// Example usage
let numbers = [1, 2, 3, 4, 5]
let result = sumOfSquares(numbers)
print("Output: \(result)")
