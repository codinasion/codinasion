import { isPalindrome } from "./is-palindrome";

describe("isPalindrome", () => {
  it("should return true for palindromic strings", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("No 'x' in Nixon")).toBe(true);
  });

  it("should return false for non-palindromic strings", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should handle strings with only non-alphanumeric characters", () => {
    expect(isPalindrome("!!!")).toBe(true);
  });
});
