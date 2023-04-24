function RecursiveSumOfNums(num: number): number {
  if (num === 0) {
    return 0;
  }
  return (num % 10) + RecursiveSumOfNums(Math.floor(num / 10));
}

console.log(RecursiveSumOfNums(12345));
