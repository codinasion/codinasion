// Write a JavaScript program to find sum of digits of a number
// Suppose you have a number n and you want to find the sum of its digits.
// For example, if n = 123, then the sum of its digits is 1 + 2 + 3 = 6.

function sumOfDigits(number) {
  let digits = number.toString().split("");
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
  }
  return sum;
}
