import { isOdd } from "./is-odd";

describe("isOdd", () => {
  test("should return true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  test("should return false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-2)).toBe(false);
  });
});
