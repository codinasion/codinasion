const getCube = (n: number) => n * n * n;

const checkArmstrongNumber = (number: number) => {
  const digitsOfNUmber: number[] = String(number)
    .split("")
    .map((digit) => Number(digit));

  let sumOfCubesOfDigits: number = 0;

  digitsOfNUmber.forEach((digit) => {
    sumOfCubesOfDigits += getCube(digit);
  });

  const isArmstrong = sumOfCubesOfDigits === number;

  return isArmstrong ? "Armstrong Number" : "Not Armstrong Number";
};

console.log(checkArmstrongNumber(153));
