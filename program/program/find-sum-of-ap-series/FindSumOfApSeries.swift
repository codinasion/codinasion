func sumOfAPSeries(firstTerm a: Int, numberOfTerms n: Int, commonDifference d: Int) -> Int {
    var sum = 0
    var currentTerm = a
    
    // Iterate through each term and add it to the sum
    for _ in 1...n {
        sum += currentTerm
        currentTerm += d
    }
    
    return sum
}

// Taking user input
print("Enter the first term (a) of the AP:")
if let firstTerm = Int(readLine() ?? "0") {
    print("Enter the number of terms (n) in the AP:")
    if let numberOfTerms = Int(readLine() ?? "0") {
        print("Enter the common difference (d) of the AP:")
        if let commonDifference = Int(readLine() ?? "0") {
            let seriesSum = sumOfAPSeries(firstTerm: firstTerm, numberOfTerms: numberOfTerms, commonDifference: commonDifference)
            print("Sum of the AP series:", seriesSum)
        } else {
            print("Invalid input for common difference.")
        }
    } else {
        print("Invalid input for number of terms.")
    }
} else {
    print("Invalid input for first term.")
}
