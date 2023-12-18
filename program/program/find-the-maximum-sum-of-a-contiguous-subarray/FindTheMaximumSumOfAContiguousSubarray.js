function getTheHighstSumInArr(arr) {
  const arrToWork = arr.sort((a, b) => a - b);
  [...new Set(arrToWork)];
  const arrToSum = [];
  let index = arr.length;
  for (let i = 0; i < 4; i++) {
    arrToSum.push(arrToWork[--index]);
  }
  const res = arrToSum.reduce((a, b) => {
    return a + b;
  });
  return res;
}
