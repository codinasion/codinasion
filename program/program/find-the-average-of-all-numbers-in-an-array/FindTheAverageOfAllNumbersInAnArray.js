const averageOfNumbers = (arr) => {
  return arr.reduce((a, v) => a + v) / arr.length;
};

console.log(averageOfNumbers([1, 2, 3, 4, 5]));
