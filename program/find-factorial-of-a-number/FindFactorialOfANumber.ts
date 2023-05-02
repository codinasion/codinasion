const findFactorial = (n: number) => {
  let result = 1;

  if (n == 0 || n == 1) {
    return result;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  } else {
    return "please enter a positive number.";
  }
};

console.log(findFactorial(5));
