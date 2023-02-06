/**
 * function to find minimum of n numbers
 * @param {Array.<number>} inputArray - The input array
 * @returns {number|string} - The minimum value from inputArray or the error message
 */
 const findMinimumOfNNumbers = (inputArray) => {
  if (!Array.isArray(inputArray)) {
    return 'Error: Input should be array';
  }

  if (inputArray.length === 0) {
    return 'Error: Input array should not be empty';
  }

  // Ignore invalid numbers from input array
  const validNumbers = inputArray.filter(input => Number.isFinite(input));

  if (validNumbers.length === 0) {
    return 'Error: Input array should have at least one valid number';
  }

  let minimumValue = validNumbers[0];

  validNumbers.forEach(number => {
    if (number < minimumValue) {
      minimumValue = number;
    }
  });

  return minimumValue;
}

console.log(findMinimumOfNNumbers('random string'));
console.log(findMinimumOfNNumbers([]));
console.log(findMinimumOfNNumbers(['10']));
console.log(findMinimumOfNNumbers([10]));
console.log(findMinimumOfNNumbers([10, '20', undefined, 100, NaN]));
console.log(findMinimumOfNNumbers([10, -20, 50, 99]));
