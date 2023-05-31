var averageOfDigits = function (num, digitsCount, digitsSum) {
  if (digitsCount === void 0) {
    digitsCount = 0;
  }
  if (digitsSum === void 0) {
    digitsSum = 0;
  }
  if (num < 10) {
    digitsCount++;
    digitsSum += num;
    return digitsSum / digitsCount;
  } else {
    var digit = num % 10;
    digitsCount++;
    digitsSum += digit;
    num = Math.floor(num / 10);
    return averageOfDigits(num, digitsCount, digitsSum);
  }
};
console.log(averageOfDigits(455));
