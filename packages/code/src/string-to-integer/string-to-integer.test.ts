import { stringToInteger } from './string-to-integer';

describe('stringToInteger', () => {
  it('should convert valid strings to integers', () => {
    expect(stringToInteger("42")).toBe(42);
    expect(stringToInteger("   -42")).toBe(-42);
    expect(stringToInteger("4193 with words")).toBe(4193);
    expect(stringToInteger("-91283472332")).toBe(-2147483648); // Overflow case
    expect(stringToInteger("91283472332")).toBe(2147483647); // Overflow case
  });

  it('should return 0 for invalid strings', () => {
    expect(stringToInteger("words and 987")).toBe(0);
    expect(stringToInteger("")).toBe(0);
    expect(stringToInteger("   ")).toBe(0);
  });

  it('should handle strings with leading and trailing whitespace', () => {
    expect(stringToInteger("   123   ")).toBe(123);
    expect(stringToInteger("   -123   ")).toBe(-123);
  });

  it('should handle strings with only a sign', () => {
    expect(stringToInteger("+")).toBe(0);
    expect(stringToInteger("-")).toBe(0);
  });
});