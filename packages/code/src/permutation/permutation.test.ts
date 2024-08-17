import { permutation } from "./permutation";

describe("permutation", () => {
  test("calculates permutation of 5 objects taken 3 at a time", () => {
    expect(permutation(5, 3)).toBe(60);
  });

  test("calculates permutation of 6 objects taken 2 at a time", () => {
    expect(permutation(6, 2)).toBe(30);
  });

  test("returns 0 when r > n", () => {
    expect(permutation(3, 5)).toBe(0);
  });

  test("returns 1 when r = 0", () => {
    expect(permutation(5, 0)).toBe(1);
  });

  test("returns 1 when n = 0 and r = 0", () => {
    expect(permutation(0, 0)).toBe(1);
  });

  test("handles large numbers", () => {
    expect(permutation(10, 5)).toBe(30240);
  });
});
