function sumOfNumbers(num: number) {
  let sumOfNum = 0;
  if (num === 0) {
    return 0;
  } else {
    sumOfNum = (num % 10) + sumOfNumbers(Math.floor(num / 10));
  }

  return sumOfNum;
}

console.log("Sum of Numbers", sumOfNumbers(12345));
