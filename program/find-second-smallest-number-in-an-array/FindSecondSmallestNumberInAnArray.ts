function findSecondSmallestNumberInAnArrayTs(numbersArr: number[]): number {
  let sm: number = Infinity;
  let secSm: number = Infinity;

  numbersArr.forEach((num: number) => {
    if (num < sm) {
      secSm = sm;
      sm = num;
    } else if (num < secSm && num > sm) {
      secSm = num;
    }
  });

  return secSm;
}

console.log(findSecondSmallestNumberInAnArrayTs([2, 3, 45, -2, 5]));
