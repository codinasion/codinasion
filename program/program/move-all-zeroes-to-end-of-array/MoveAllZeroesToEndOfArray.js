function moveZeroesToEnd(arr) {
    let count = 0; // Count of non-zero elements
    
    // Traverse the array. If element encountered is non-zero, then replace the element at index 'count' with this element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    
    // Now all non-zero elements have been shifted to front and 'count' is set as index of first 0. Make all elements 0 from count to end
    while (count < arr.length) {
        arr[count++] = 0;
    }
    
    return arr;
}

// Test cases
let arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeroesToEnd(arr1)); // Output: [1, 2, 4, 3, 5, 0, 0, 0]

let arr2 = [1, 2, 0, 0, 0, 3, 6];
console.log(moveZeroesToEnd(arr2)); // Output: [1, 2, 3, 6, 0, 0, 0]
