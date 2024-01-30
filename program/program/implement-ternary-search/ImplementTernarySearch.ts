function ternarySearch(arr: number[], value: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const partitionSize = Math.floor((right - left) / 3);
        const mid1 = left + partitionSize;
        const mid2 = right - partitionSize;

        if (arr[mid1] === value) {
            return mid1;
        }

        if (arr[mid2] === value) {
            return mid2;
        }

        if (value < arr[mid1]) {
            right = mid1 - 1;
        } else if (value > arr[mid2]) {
            left = mid2 + 1;
        } else {
            // Adjust pointers based on the comparison with the target value
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }

    return -1;
}

// Example
const list = [1, 2, 3, 4, 5];
const valueToSearch = 4;

const result = ternarySearch(list, valueToSearch);

console.log(`Output: ${result}`);
