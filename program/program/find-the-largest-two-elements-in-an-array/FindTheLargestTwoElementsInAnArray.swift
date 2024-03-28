func findLargestTwo(_ arr: [Int]) -> (Int, Int) {
    var firstLargest = Int.min
    var secondLargest = Int.min
    
    for num in arr {
        if num > firstLargest {
            secondLargest = firstLargest
            firstLargest = num
        } else if num > secondLargest && num != firstLargest {
            secondLargest = num
        }
    }
    
    return (firstLargest, secondLargest)
}

// Test cases
let arr1 = [12, 13, 1, 10, 34, 1]
let arr2 = [10, 5, 10]
let arr3 = [10, 10, 10]

let result1 = findLargestTwo(arr1)
let result2 = findLargestTwo(arr2)
let result3 = findLargestTwo(arr3)

print("The largest two elements are \(result1.0) and \(result1.1)")
print("The largest two elements are \(result2.0) and \(result2.1)")
print("The largest two elements are \(result3.0) and \(result3.1)")

