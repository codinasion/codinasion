function findSecondLargestNumberInAnArray(inputArray: Array<number>): number {
    if(inputArray instanceof Array && inputArray.length) {
        let maxNum: number = Math.max(...inputArray)

        let indexOfMaxNum: number = inputArray.indexOf(maxNum)

        inputArray.splice(indexOfMaxNum, 1)

        return Math.max(...inputArray)
        }
    return 0;
}
console.log(findSecondLargestNumberInAnArray([1, 20, 30]))
console.log(findSecondLargestNumberInAnArray([10, 100, 1000]))
console.log(findSecondLargestNumberInAnArray([1, 2, 3, 4, 5]))
