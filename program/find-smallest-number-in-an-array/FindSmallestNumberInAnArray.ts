function FindSmallestNumberInAnArray(values: number[]) {
    let smallest = values[0]; // If values has length = 0, undefined is good
    for (let i = 1; i < values.length; i++) {
        if (smallest > values[i]) {
            smallest = values[i];
        }
    }
    return smallest;
}

FindSmallestNumberInAnArray([1, 4, -5, 2, 1])