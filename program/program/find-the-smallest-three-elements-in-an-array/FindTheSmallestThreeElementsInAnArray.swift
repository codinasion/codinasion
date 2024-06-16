import Foundation

func findSmallestThreeElements(arr: [Int]) -> [Int] {
    guard arr.count >= 3 else {
        print("Array should have at least 3 elements")
        return []
    }

    var first = Int.max
    var second = Int.max
    var third = Int.max

    for num in arr {
        if num < first {
            third = second
            second = first
            first = num
        } else if num < second {
            third = second
            second = num
        } else if num < third {
            third = num
        }
    }

    return [first, second, third]
}

// Example usage
let arr = [12, 13, 1, 10, 34, 1]
let smallestThree = findSmallestThreeElements(arr: arr)
print("The smallest three elements are: \(smallestThree)")
