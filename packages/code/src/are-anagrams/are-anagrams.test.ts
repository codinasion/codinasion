import { areAnagrams } from "./are-anagrams";

describe("areAnagrams", () => {
  test("should return true for anagrams", () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
  });

  test("should return false for non-anagrams", () => {
    expect(areAnagrams("hello", "world")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(areAnagrams("Listen", "Silent")).toBe(true);
  });

  test("should return false for strings with different lengths", () => {
    expect(areAnagrams("abc", "abcd")).toBe(false);
  });

  test("should handle strings with special characters", () => {
    expect(areAnagrams("a!b@c", "c@b!a")).toBe(true);
  });

  test("should return true for empty strings", () => {
    expect(areAnagrams("", "")).toBe(true);
  });
});
