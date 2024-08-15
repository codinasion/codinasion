export function calculateSimpleInterest(
  principal: number,
  rate: number,
  years: number,
): number {
  // Convert the annual rate from percentage to decimal
  const decimalRate = rate / 100;

  // Calculate the interest using the simple interest formula
  const interest = principal * decimalRate * years;

  return interest;
}
