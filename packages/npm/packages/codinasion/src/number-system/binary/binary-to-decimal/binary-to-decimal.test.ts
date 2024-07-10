import { BinaryToDecimal } from "./binary-to-decimal";

describe("BinaryToDecimal", () => {
  it("should convert binary to decimal", () => {
    expect(BinaryToDecimal("10")).toBe(2);
    expect(BinaryToDecimal("10000000")).toBe(128);
  });

  it("should return NaN for invalid input", () => {
    expect(BinaryToDecimal("123")).toBe(NaN);
    expect(BinaryToDecimal("abc")).toBe(NaN);
  });
});
