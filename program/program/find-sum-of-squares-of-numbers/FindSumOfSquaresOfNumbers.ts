function sumOfSquares(numbers: number[]): number {
  let sum = 0;
  for (const number of numbers) {
    sum += number * number;
  }
  return sum;
}
