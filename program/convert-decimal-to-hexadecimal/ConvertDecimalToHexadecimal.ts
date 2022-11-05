const letters = new Map([
  ["10", "A"],
  ["11", "B"],
  ["12", "C"],
  ["13", "D"],
  ["14", "E"],
  ["15", "F"]
]);

const decimalToHexadecimal = (number: number): string => {
  let hexFormat = "";
  let quotient, remainder;
  while (number) {
    quotient = Math.trunc(number / 16);
    remainder = String(number % 16);
    hexFormat = (letters.get(remainder) ?? remainder) + hexFormat;
    number = quotient;
  }
  return hexFormat;
};

console.log(decimalToHexadecimal(11)); // B
console.log(decimalToHexadecimal(32)); // 20
