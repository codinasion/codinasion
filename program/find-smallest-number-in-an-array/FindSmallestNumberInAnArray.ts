const findSmallestNumberInAnArray = (numbers: number[]) => {
  return Math.min(...numbers);
};

console.log(findSmallestNumberInAnArray([1, 2, 3, 4, 5])); // 1
console.log(findSmallestNumberInAnArray([1, 2, 3, -4, 5])); // -4
