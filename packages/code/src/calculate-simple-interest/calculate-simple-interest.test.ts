import { calculateSimpleInterest } from "./calculate-simple-interest";

describe("calculateSimpleInterest", () => {
  it("should calculate the correct simple interest for given inputs", () => {
    const principal = 1000;
    const rate = 5;
    const years = 10;

    const result = calculateSimpleInterest(principal, rate, years);
    expect(result).toBeCloseTo(500, 2); // Expected result with 2 decimal precision
  });

  it("should return 0 if the rate is 0", () => {
    const principal = 1000;
    const rate = 0;
    const years = 10;

    const result = calculateSimpleInterest(principal, rate, years);
    expect(result).toBeCloseTo(0, 2);
  });

  it("should return 0 if the principal is 0", () => {
    const principal = 0;
    const rate = 5;
    const years = 10;

    const result = calculateSimpleInterest(principal, rate, years);
    expect(result).toBeCloseTo(0, 2);
  });

  it("should return 0 if the number of years is 0", () => {
    const principal = 1000;
    const rate = 5;
    const years = 0;

    const result = calculateSimpleInterest(principal, rate, years);
    expect(result).toBeCloseTo(0, 2);
  });

  it("should handle negative values for principal, rate, and years", () => {
    const principal = -1000;
    const rate = -5;
    const years = -10;

    const result = calculateSimpleInterest(principal, rate, years);
    expect(result).toBeCloseTo(-500, 2);
  });
});
