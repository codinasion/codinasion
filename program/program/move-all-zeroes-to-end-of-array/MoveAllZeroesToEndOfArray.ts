function moveZeroesToEnd(arr: number[]): number[] {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the beginning of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }

    // Fill remaining positions with zeroes
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Test cases
console.log(moveZeroesToEnd([1, 2, 0, 4, 3, 0, 5, 0])); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
console.log(moveZeroesToEnd([1, 2, 0, 0, 0, 3, 6]));   // Output: [1, 2, 3, 6, 0, 0, 0]
