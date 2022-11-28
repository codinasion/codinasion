/**
 * Return sum of all the numbers in array
 * @param {Array} arr Array of numbers
 * @returns {number} sum of array
 */
const getArraySum = (arr) => {
  if (!Array.isArray(arr)) throw "Parameter should be typeof an Array";
  return arr.reduce((acc, e, i) => {
    if (typeof e !== "number")
      throw `Element${e} at Index ${i}: is not an number`;
    return e + acc;
  }, 0);
};

try {
  console.log(getArraySum([1, 2, 3, 4, 5]));
} catch (e) {
  console.log(e);
}
try {
  console.log(getArraySum([1, 2, 3, "a", 5]));
} catch (e) {
  console.log(e);
}
try {
  console.log(getArraySum(0));
} catch (e) {
  console.log(e);
}
