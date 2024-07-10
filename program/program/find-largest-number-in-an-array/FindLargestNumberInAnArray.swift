import Foundation

func findThreeLargestElements(in array: [Int]) -> [Int] {
    // Ensure the array has at least one element
    guard !array.isEmpty else {
        print("Array is empty.")
        return []
    }
    
    // Sort the array in descending order
    let sortedArray = array.sorted(by: >)
    
    // Slice the first three elements, if there are at least three elements
    let largestThree = sortedArray.prefix(3)
    
    return Array(largestThree)
}

// Example usage
let array = [10, 4, 3, 50, 23, 90, 1, 100, 49]
let largestThree = findThreeLargestElements(in: array)
print("The largest three elements are:", largestThree)
