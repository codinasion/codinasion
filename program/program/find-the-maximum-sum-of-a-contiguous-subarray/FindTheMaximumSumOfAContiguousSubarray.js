function getTheHighstSumInArr(nums) {
  if(nums.length === 1 ) return nums[0];
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
      sum = Math.max(nums[i], nums[i] + sum)
      maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}
