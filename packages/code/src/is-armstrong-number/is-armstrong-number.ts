export function isArmstrongNumber(num: number): boolean {
  // Convert the number to a string to easily access each digit
  const numStr = num.toString();
  // Calculate the number of digits
  const numDigits = numStr.length;
  // Calculate the sum of the digits raised to the power of the number of digits
  const sum = numStr.split("").reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);
  // Compare the sum to the original number
  return sum === num;
}
