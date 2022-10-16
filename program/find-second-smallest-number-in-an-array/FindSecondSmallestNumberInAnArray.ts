function findSecondSmallestNumberInAnArray(array: Array<number>) {
    if (array.length < 2) throw Error('Array needs to contain at least two elements.')
    const clonedArray = Object.assign([], array);
    return clonedArray.sort((a, b) => a - b)[1];
}

findSecondSmallestNumberInAnArray([0, 41, 12, 4]);