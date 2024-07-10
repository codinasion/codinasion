import Foundation

func ternarySearch(_ array: [Int], _ value: Int, _ left: Int, _ right: Int) -> Int {
    if right >= left {
        let partitionSize = (right - left) / 3
        let mid1 = left + partitionSize
        let mid2 = right - partitionSize

        if array[mid1] == value {
            return mid1
        }
        if array[mid2] == value {
            return mid2
        }

        if value < array[mid1] {
            return ternarySearch(array, value, left, mid1 - 1)
        } else if value > array[mid2] {
            return ternarySearch(array, value, mid2 + 1, right)
        } else {
            return ternarySearch(array, value, mid1 + 1, mid2 - 1)
        }
    }
    return -1
}

// Example usage
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let valueToSearch = 7

let result = ternarySearch(sortedArray, valueToSearch, 0, sortedArray.count - 1)

if result != -1 {
    print("Element found at index \(result)")
} else {
    print("Element not found in the array")
}
