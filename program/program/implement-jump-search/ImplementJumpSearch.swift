
import Foundation

func jumpSearch(_ arr: [Int], _ x: Int) -> Int? {
    let n = arr.count
    var blockSize = Int(sqrt(Double(n))) // Changed to var
    var prev = 0
    
    while arr[min(blockSize, n) - 1] < x {
        prev = blockSize
        blockSize += Int(sqrt(Double(n)))
        if prev >= n {
            return nil
        }
    }
    
    while arr[prev] < x {
        prev += 1
        if prev == min(blockSize, n) {
            return nil
        }
    }
    
    if arr[prev] == x {
        return prev
    }
    
    return nil
}

// Take input from the user
print("Enter the sorted array elements separated by spaces:")
if let input = readLine() {
    let list = input.split(separator: " ").compactMap { Int($0) } // Corrected
    print("Enter the value to search:")
    if let valueInput = readLine(), let value = Int(valueInput) {
        if let index = jumpSearch(list, value) {
            print("Output:", index)
        } else {
            print("Output: not found")
        }
    } else {
        print("Invalid input for the value.")
    }
} else {
    print("Invalid input for the array.")
}
