const FindTheAverageOfAllNumbersInAnArray = (nums: number[]): number => {
    let sum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}
export default FindTheAverageOfAllNumbersInAnArray;