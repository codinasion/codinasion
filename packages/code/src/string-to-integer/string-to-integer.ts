export function stringToInteger(str: string): number {
  // Trim leading and trailing whitespace
  str = str.trim();

  if (str.length === 0) return 0;

  let sign = 1;
  let index = 0;
  let result = 0;

  // Handle sign
  if (str[index] === '+' || str[index] === '-') {
    sign = str[index] === '-' ? -1 : 1;
    index++;
  }

  // Convert characters to integer
  while (index < str.length) {
    const char = str[index];
    if (char === undefined || char < '0' || char > '9') break;

    result = result * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
    index++;
  }

  // Apply sign only if result is not zero
  if (result !== 0) {
    result *= sign;
  }

  // Handle overflow
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
}