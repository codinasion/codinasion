const reverseNumber = (n: number) => {
  const reversedNumber = n.toString().split("").reverse().join("");

  return parseFloat(reversedNumber) * Math.sign(n);
};

console.log(reverseNumber(123));
