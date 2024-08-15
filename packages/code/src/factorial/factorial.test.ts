import { factorial } from "./factorial";

describe("factorial", () => {
  it("should return 1 for factorial of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for factorial of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 for factorial of 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 for factorial of 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 for factorial of 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return 120 for factorial of 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should handle larger numbers correctly", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
