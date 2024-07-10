function printNumbers(n) {
  if (n === 0) {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}

printNumbers(5);
