function findLargestThreeElements(arr: number[]): number[] {
    if (arr.length < 3) {
        throw new Error("Array should have at least three elements");
    }

    // Sort the array in descending order
    arr.sort((a, b) => b - a);

    // Return the first three elements
    return arr.slice(0, 3);
}

const test_input: number[] = [10, 4, 3, 50, 23, 90];
const test_output: number[] = findLargestThreeElements(test_input);
console.log("Input:", test_input);
console.log("Output:", test_output);