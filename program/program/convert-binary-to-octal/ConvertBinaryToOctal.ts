const binaryToDecimal = (input: number): number => {
  return parseInt(input.toString(), 2);
};

export const binaryToOctal = (input: number): number => {
  const decimal = binaryToDecimal(input);
  return Number(decimal.toString(8));
};
