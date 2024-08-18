import { binaryToOctal } from './binary-to-octal';

describe('binaryToOctal', () => {
  it('should convert valid binary strings to octal', () => {
    expect(binaryToOctal("1010")).toBe("12");
    expect(binaryToOctal("1111")).toBe("17");
    expect(binaryToOctal("10000")).toBe("20");
    expect(binaryToOctal("0")).toBe("0");
    expect(binaryToOctal("1")).toBe("1");
    expect(binaryToOctal("110010")).toBe("62");
  });

  it('should throw an error for invalid binary strings', () => {
    expect(() => binaryToOctal("102")).toThrow("Invalid binary string");
    expect(() => binaryToOctal("abc")).toThrow("Invalid binary string");
    expect(() => binaryToOctal("")).toThrow("Invalid binary string");
  });
});