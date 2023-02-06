function convertStringToInteger(str) {
  let [isNegative, result, num] = [false, str, 0];

  if (result[0] === '-') {
    isNegative = true;
    result = result.slice(1);
  }

  for (let i = 0; i < result.length; i += 1) {
    const charCode = result.charCodeAt(i) - 48;
    const pow = 10 ** (result.length - i - 1);
    num += charCode * pow;
  }

  return isNegative ? num * -1 : num;
}

const str = '123';
console.log(`Input: ${str}, type: ${typeof str}`);
console.log(`Output: ${convertStringToInteger(str)}, type: ${typeof convertStringToInteger(str)}`);

const strWithNegative = '-123';
console.log(`Input: ${strWithNegative}, type: ${typeof strWithNegative}`);
console.log(`Output: ${convertStringToInteger(strWithNegative)}, type: ${typeof convertStringToInteger(strWithNegative)}`);