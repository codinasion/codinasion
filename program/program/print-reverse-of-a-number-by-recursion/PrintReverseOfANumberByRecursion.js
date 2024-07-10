const reverseNum = (num) => {
  return num < 10
    ? String(num)
    : String(num % 10) + reverseNum(Math.floor(num / 10));
};

console.log(reverseNum(8675309));
