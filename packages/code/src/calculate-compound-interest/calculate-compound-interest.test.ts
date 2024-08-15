import { calculateCompoundInterest } from "./calculate-compound-interest";

describe("calculateCompoundInterest", () => {
  it("should calculate the correct compound interest for given inputs", () => {
    const principal = 1000;
    const rate = 5;
    const timesCompounded = 12;
    const years = 10;

    const result = calculateCompoundInterest(
      principal,
      rate,
      timesCompounded,
      years,
    );
    expect(result).toBeCloseTo(1647.01, 2); // Expected result with 2 decimal precision
  });

  it("should return the principal amount if the rate is 0", () => {
    const principal = 1000;
    const rate = 0;
    const timesCompounded = 12;
    const years = 10;

    const result = calculateCompoundInterest(
      principal,
      rate,
      timesCompounded,
      years,
    );
    expect(result).toBeCloseTo(1000, 2);
  });

  it("should handle a single compounding period per year", () => {
    const principal = 1000;
    const rate = 5;
    const timesCompounded = 1;
    const years = 10;

    const result = calculateCompoundInterest(
      principal,
      rate,
      timesCompounded,
      years,
    );
    expect(result).toBeCloseTo(1628.89, 2);
  });

  it("should handle zero years", () => {
    const principal = 1000;
    const rate = 5;
    const timesCompounded = 12;
    const years = 0;

    const result = calculateCompoundInterest(
      principal,
      rate,
      timesCompounded,
      years,
    );
    expect(result).toBeCloseTo(1000, 2);
  });
});
