const octalToBinary = (octal: string): string => {
  return parseInt(octal, 2).toString(8);
};

console.log(octalToBinary("1010"));
