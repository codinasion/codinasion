import { isFloat } from "./is-float";

describe("isFloat", () => {
  test("should return true for floats", () => {
    expect(isFloat(4.5)).toBe(true);
    expect(isFloat(-1.1)).toBe(true);
  });

  test("should return false for integers", () => {
    expect(isFloat(4)).toBe(false);
    expect(isFloat(0)).toBe(false);
    expect(isFloat(-2)).toBe(false);
  });
});
