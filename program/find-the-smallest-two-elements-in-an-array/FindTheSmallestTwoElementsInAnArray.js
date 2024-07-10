function findTheSmallestTwoElementsInAnArray(arr) {
    arr.sort((a, b) => a - b);
    return arr.slice(0, 2);
}

console.log(findTheSmallestTwoElementsInAnArray([12, 13, 1, 10, 34, 1]));
console.log(findTheSmallestTwoElementsInAnArray([10, 5, 10]));
