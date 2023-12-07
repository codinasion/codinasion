import { BinaryToHexadecimal } from "./binary-to-hexadecimal";

describe("BinaryToHexadecimal", () => {
  it("should convert binary to hexadecimal", () => {
    expect(BinaryToHexadecimal("1111")).toBe("F");
    expect(BinaryToHexadecimal("10000000")).toBe("80");
  });

  it("should return empty string for invalid input", () => {
    expect(BinaryToHexadecimal("123")).toBe("");
    expect(BinaryToHexadecimal("abc")).toBe("");
  });
});
