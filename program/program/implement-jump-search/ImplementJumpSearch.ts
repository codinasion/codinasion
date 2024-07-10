function jumpSearch(arr: number[], x: number): number {
    const n = arr.length;
    let blockSize = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Jumping to the right block
    while (arr[Math.min(blockSize, n) - 1] < x) {
        prev = blockSize;
        blockSize += Math.floor(Math.sqrt(n));

        if (prev >= n) {
            return -1; // Not found
        }
    }

    // Linear search within the block
    while (arr[prev] < x) {
        prev++;

        if (prev === Math.min(blockSize, n)) {
            return -1; // Not found
        }
    }

    // If the element is found
    if (arr[prev] === x) {
        return prev;
    }

    return -1; // Not found
}

// Example usage
const exampleInput = [1, 2, 3, 4, 5];
const valueToSearch = 4;
const res = jumpSearch(exampleInput, valueToSearch);

if (res !== -1) {
    console.log(`Element ${valueToSearch} found at index ${res}`);
} else {
    console.log(`Element ${valueToSearch} not found`);
}
