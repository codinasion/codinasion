import Foundation

func findSmallestTwoElements(in array: [Int]) -> (Int, Int)? {
    guard array.count >= 2 else {
        print("Array should have at least two elements.")
        return nil
    }

    var smallest = Int.max
    var secondSmallest = Int.max

    for number in array {
        if number < smallest {
            secondSmallest = smallest
            smallest = number
        } else if number < secondSmallest {
            secondSmallest = number
        }
    }

    return (smallest, secondSmallest)
}

// Example usage:
if let result = findSmallestTwoElements(in: [5, 3, 1, 2, 4]) {
    print("The smallest element is \(result.0) and the second smallest element is \(result.1)")
} else {
    print("Unable to find the smallest two elements.")
}
