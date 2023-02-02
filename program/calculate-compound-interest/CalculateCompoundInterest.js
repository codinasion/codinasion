function calculateCompoundInterest(principal, rate, time, compoundingsPerYear) {
  const compoundFactor = 1 + rate / 100 / compoundingsPerYear;
  const numberOfCompoundings = time * compoundingsPerYear;
  const compoundInterest =
    principal * Math.pow(compoundFactor, numberOfCompoundings);
  return compoundInterest - principal;
}
