const simpleInterest = (principal, rate, time) => {
  return principal * Math.pow(1 + rate / 100, time);
};

console.log(simpleInterest);
