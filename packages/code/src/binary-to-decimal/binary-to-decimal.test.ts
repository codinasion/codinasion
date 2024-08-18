import { binaryToDecimal } from './binary-to-decimal';

describe('binaryToDecimal', () => {
  it('should convert valid binary strings to decimal', () => {
    expect(binaryToDecimal("1010")).toBe(10);
    expect(binaryToDecimal("1111")).toBe(15);
    expect(binaryToDecimal("10000")).toBe(16);
    expect(binaryToDecimal("0")).toBe(0);
    expect(binaryToDecimal("1")).toBe(1);
  });

  it('should throw an error for invalid binary strings', () => {
    expect(() => binaryToDecimal("102")).toThrow("Invalid binary string");
    expect(() => binaryToDecimal("abc")).toThrow("Invalid binary string");
    expect(() => binaryToDecimal("")).toThrow("Invalid binary string");
  });
});