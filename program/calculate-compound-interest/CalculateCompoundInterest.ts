function calculateCompoundInterest(principal: Number, rate: Number, time: Number): Number {
  const compoundFactor: Number = 1 + rate / 100;

  const compoundInterest: Number = principal * Math.pow(compoundFactor, time);
  return compoundInterest;
}
console.log(calculateCompoundInterest(1000, 10, 5));
