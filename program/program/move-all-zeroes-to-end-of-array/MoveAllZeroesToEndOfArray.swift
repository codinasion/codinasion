func moveZeroesToEnd(_ arr: inout [Int]) {
    var nonZeroIndex = 0
    
    // Traverse the array, if the current element is non-zero, move it to the front
    for num in arr {
        if num != 0 {
            arr[nonZeroIndex] = num
            nonZeroIndex += 1
        }
    }
    
    // Fill the remaining positions with zeroes
    while nonZeroIndex < arr.count {
        arr[nonZeroIndex] = 0
        nonZeroIndex += 1
    }
}

// Take input from the user
print("Enter the array elements separated by spaces:")
if let input = readLine(), !input.isEmpty {
    let array = input.split(separator: " ").compactMap { Int($0) }
    if array.isEmpty {
        print("Invalid input. Please enter valid integers separated by spaces.")
    } else {
        var arr = array
        moveZeroesToEnd(&arr)
        print("Output: \(arr)")
    }
} else {
    print("Invalid input. Please enter valid integers separated by spaces.")
}
