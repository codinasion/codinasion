function findSecondLargestNumberInAnArray(arr) {
    let maxNum = Math.max(...arr)

    let indexOfMaxNum = arr.indexOf(maxNum)

    arr.splice(indexOfMaxNum, 1)

    return Math.max(...arr)
}
console.log(findSecondLargestNumberInAnArray([1, 20, 30]))
console.log(findSecondLargestNumberInAnArray([10, 100, 1000]))
console.log(findSecondLargestNumberInAnArray([1, 2, 3, 4, 5]))
