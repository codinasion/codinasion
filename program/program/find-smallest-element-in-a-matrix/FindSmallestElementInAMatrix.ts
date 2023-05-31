const FindSmallestElementInAMatrix = (matrix: number[][]): number => {
  let currSmall: number = matrix[0][0];
  matrix.forEach((arr) => {
    if (currSmall > Math.min(...arr)) {
      currSmall = Math.min(...arr);
    }
  });
  return currSmall;
};

FindSmallestElementInAMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

console.log(
  FindSmallestElementInAMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  FindSmallestElementInAMatrix([
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ])
);
console.log(
  FindSmallestElementInAMatrix([
    [10, 222, 43],
    [0, 15, 336],
    [437, 854, 49],
  ])
);
