function binarySearch(arr: number[], x: number): number {
    let lowerBound: number = 0;
    let upperBound: number = arr.length - 1;

    while (lowerBound <= upperBound) {
        const midPoint: number = Math.floor((lowerBound + upperBound) / 2);

        if (arr[midPoint] === x) {
            return midPoint; // Element found, return index
        } else if (arr[midPoint] < x) {
            lowerBound = midPoint + 1; // Search in the right half
        } else {
            upperBound = midPoint - 1; // Search in the left half
        }
    }

    return -1; // Element not found
}

// Example usage:
const list: number[] = [1, 2, 3, 4, 5];
const value: number = 4;
const index: number = binarySearch(list, value);
console.log("Output:", index); // Output: 3
