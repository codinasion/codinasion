import { combination } from "./combination";

describe("combination", () => {
  it("should return 0 if r is greater than n", () => {
    expect(combination(5, 6)).toBe(0);
  });

  it("should return 1 for combination of n objects taken 0 at a time", () => {
    expect(combination(5, 0)).toBe(1);
  });

  it("should return 1 for combination of n objects taken n at a time", () => {
    expect(combination(5, 5)).toBe(1);
  });

  it("should return the correct combination for given n and r", () => {
    expect(combination(5, 3)).toBe(10);
    expect(combination(6, 2)).toBe(15);
    expect(combination(10, 4)).toBe(210);
  });

  it("should handle edge cases correctly", () => {
    expect(combination(0, 0)).toBe(1);
    expect(combination(1, 0)).toBe(1);
    expect(combination(1, 1)).toBe(1);
  });
});
