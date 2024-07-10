function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

const number1: number = 12;
const number2: number = 18;
const lcm: number = (number1 * number2) / gcd(number1, number2);

console.log(`LCM of ${number1} and ${number2} is: ${lcm}`);
