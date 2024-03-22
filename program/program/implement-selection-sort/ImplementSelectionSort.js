function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the element at the current index
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

// Example usage:
let arrayToSort = [64, 25, 12, 22, 11];
selectionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
