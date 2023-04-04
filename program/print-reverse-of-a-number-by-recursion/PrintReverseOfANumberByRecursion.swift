func printReverse(_ n: Int) {
    if n < 10 {
        print(n)
    } else {
        print(n % 10, terminator: "")
        printReverse(n / 10)
    }
}

// Example usage:
printReverse(123) // Output: 321
