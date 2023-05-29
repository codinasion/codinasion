function findSecondSmallestNumberInAnArrayTs(numbersArr: number[]): number {
  let firstSmallest: number = Infinity;
  let secondSmallest: number = Infinity;

  numbersArr.forEach((num: number) => {
    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num > firstSmallest) {
      secondSmallest = num;
    }
  });

  return secondSmallest;
}
