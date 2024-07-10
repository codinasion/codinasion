// Online Swift compiler to run Swift program online
// Print "Hello, World!" message
func digitAverage(_ num: Int) -> Double {
    // Base case: if the number is a single digit
    if num < 10 {
        return Double(num)
    } else {
        // Recursive case: calculate the average of digits
        let lastDigit = num % 10
        let remainingDigits = num / 10
        let averageOfRemainingDigits = digitAverage(remainingDigits)
        
        // Calculate the overall average
        let totalDigits = Double(String(num).count)
        return (averageOfRemainingDigits * (totalDigits - 1) + Double(lastDigit)) / totalDigits
    }
}

// Example usage
let number = 123
let result = digitAverage(number)
print("The average of digits in \(number) is: \(result)")

