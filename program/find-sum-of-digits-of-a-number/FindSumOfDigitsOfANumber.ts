function getSumOfDigits(value:number) {
    let sum:number = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  return sum;
}