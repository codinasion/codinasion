const simpleInterest = (
  principal: number,
  interest: number,
  time: number
): number => {
  return (principal * interest * time) / 100;
};
console.log(simpleInterest(1000, 10, 5));
