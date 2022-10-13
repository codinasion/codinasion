/**
 * find sum of cubes of numbers by recursion
 * @param  {Number} num The first number
 *
 * @return {Number}      The sum of cubes
 */

const SumOfCubesOfNumbersByRecursion = (num) => {
  let sumOfCubesOfNumber = 0;
  if (num > 0) {
    sumOfCubesOfNumber =
      Math.pow(num % 10, 3) +
      SumOfCubesOfNumbersByRecursion(Math.floor(num / 10));
  }
  return sumOfCubesOfNumber;
};

console.log(SumOfCubesOfNumbersByRecursion(12345));
