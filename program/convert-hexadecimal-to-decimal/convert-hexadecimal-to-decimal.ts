const alphabetToNumberMap = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

const convertHexadecimalToDecimal = (hexaDecimal: string): number => {
  let sum = 0;

  for (let i = hexaDecimal.length - 1; i >= 0; i--) {
    const value =
      alphabetToNumberMap[hexaDecimal[i].toLowerCase()] ||
      Number(hexaDecimal[i]);

    sum += value * Math.pow(16, hexaDecimal.length - 1 - i);
  }

  return sum;
};

console.log(convertHexadecimalToDecimal("a"));
