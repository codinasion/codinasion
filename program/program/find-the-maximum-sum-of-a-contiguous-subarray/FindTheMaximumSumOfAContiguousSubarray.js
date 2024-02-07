function getTheHighstSumInArr(arr) {
  if (arr.length === 1) return arr[0];

  const arrToWork = [...new Set(arr)]; // Remove duplicates
  const arrToSum = arrToWork.slice(-4); // Select the last 4 elements
  const maxSum = arrToSum.reduce((a, b) => a + b);

  return maxSum;
}
