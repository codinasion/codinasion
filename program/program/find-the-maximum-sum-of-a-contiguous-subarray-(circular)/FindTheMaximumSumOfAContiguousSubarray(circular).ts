const maxSumSubarrayCircularTs: any = (nums: number[]) => {
  if (nums.length === 0) return 0;

  let sum = nums[0];

  let currMax: number = nums[0];
  let currMin: number = nums[0];
  let maxTotal: number = nums[0];
  let minTotal: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let val: number = nums[i];

    currMax = Math.max(val, currMax + val);
    maxTotal = Math.max(currMax, maxTotal);

    currMin = Math.min(val, currMin + val);
    minTotal = Math.min(minTotal, currMin);

    sum += val;
  }

  if (sum == minTotal) return maxTotal;

  return Math.max(sum - minTotal, maxTotal);
};

var arr: number[] = [1, -2, 3, -2, 8, -5, 1, 7];
console.log(maxSumSubarrayCircularTs(arr));
