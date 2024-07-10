function binarySearch(arr, x) {
    let lowerBound = 0;
    let upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        let midPoint = Math.floor((lowerBound + upperBound) / 2);

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

// Example usage
const list = [1, 2, 3, 4, 5];
const value = 4;

const index = binarySearch(list, value);
if (index !== -1) {
    console.log("Output:", index); // Output: 3
} else {
    console.log("Element not found.");
}
