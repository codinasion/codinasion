export function calculateCompoundInterest(
  principal: number,
  rate: number,
  timesCompounded: number,
  years: number,
): number {
  // Convert the annual rate from percentage to decimal
  const decimalRate = rate / 100;

  // Calculate the accumulated amount using the compound interest formula
  const amount =
    principal *
    Math.pow(1 + decimalRate / timesCompounded, timesCompounded * years);

  return amount;
}
