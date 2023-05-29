const FindTheAverageOfAllNumbersInAnArray = (nums: number[]): number => {
    let sum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    const avg: number = parseFloat((sum / nums.length).toFixed(2));
    console.log(avg);
    return avg;
}
export default FindTheAverageOfAllNumbersInAnArray;