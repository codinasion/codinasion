function findingSmallLarge(numArr: number[]) {
  return [Math.max(...numArr), Math.min(...numArr)];
}

const numberArr: number[] = [1, 2, 3, 4, 5];
findingSmallLarge(numberArr);
