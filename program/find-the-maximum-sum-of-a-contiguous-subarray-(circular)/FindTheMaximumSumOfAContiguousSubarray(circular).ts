function getTheHighstSumInArr(arr: []): number {
    const arrToWork = arr.sort((a, b) => a - b);
    [...new Set(arrToWork)];
    const arrToSum: number[] = [];
    let index = arr.length;
    for (let i = 0; i < 4; i++) {
      arrToSum.push(arrToWork[--index]);
    }
    const res = arrToSum.reduce((a, b) => {
      return a + b;
    });
    return res;
  }
  