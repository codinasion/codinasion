import Foundation

// Function to calculate factorial
func factorial(_ n: Int) -> Int {
    return (n == 0) ? 1 : n * factorial(n - 1)
}

// Function to calculate permutations
func permutation(_ n: Int, _ r: Int) -> Int {
    return factorial(n) / factorial(n - r)
}

// Taking input from the user
print("input:", terminator: " ")
let inputs = readLine()?.split(separator: ",").compactMap { Int($0.trimmingCharacters(in: .whitespaces)) }
if let n = inputs?[0], let r = inputs?[1] {
    // Calculating permutations
    let result = permutation(n, r)

    // Displaying the result
    print(result)
} else {
    print("Invalid input")
}
