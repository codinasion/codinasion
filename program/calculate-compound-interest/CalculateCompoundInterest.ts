function calculateCompoundInterest(principal: number, rate: number, time: number): number {
  const compoundFactor: number = 1 + rate / 100;

  const compoundInterest: number = principal * Math.pow(compoundFactor, time);
  return compoundInterest;
}
console.log(calculateCompoundInterest(1000, 10, 5));
