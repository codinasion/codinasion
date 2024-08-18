import { binaryToHexadecimal } from "./binary-to-hexadecimal";

describe("binaryToHexadecimal", () => {
  it("should convert valid binary strings to hexadecimal", () => {
    expect(binaryToHexadecimal("1010")).toBe("A");
    expect(binaryToHexadecimal("1111")).toBe("F");
    expect(binaryToHexadecimal("10000")).toBe("10");
    expect(binaryToHexadecimal("0")).toBe("0");
    expect(binaryToHexadecimal("1")).toBe("1");
    expect(binaryToHexadecimal("110010")).toBe("32");
  });

  it("should throw an error for invalid binary strings", () => {
    expect(() => binaryToHexadecimal("102")).toThrow("Invalid binary string");
    expect(() => binaryToHexadecimal("abc")).toThrow("Invalid binary string");
    expect(() => binaryToHexadecimal("")).toThrow("Invalid binary string");
  });
});
