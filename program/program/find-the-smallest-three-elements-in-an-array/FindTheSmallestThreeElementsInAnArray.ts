function findSmallestThreeElements(arr: number[]): number[] {
    if (arr.length < 3) {
        throw new Error("Array should have at least three elements");
    }

    const sortedArray = arr.slice().sort((a, b) => a - b);

    return sortedArray.slice(0, 3);
}

// Example usage
const example_input_array = [10, 5, 8, 2, 7, 1, 3];
const output_array = findSmallestThreeElements(example_input_array);
console.log("Smallest three elements:", output_array);