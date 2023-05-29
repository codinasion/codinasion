import { BinaryToDecimal } from "../BinaryToDecimal";

describe("BinaryToDecimal", () => {
  it("should convert binary to decimal", () => {
    expect(BinaryToDecimal("0")).toBe(0);
    expect(BinaryToDecimal("1")).toBe(1);
    expect(BinaryToDecimal("10")).toBe(2);
    expect(BinaryToDecimal("11")).toBe(3);
    expect(BinaryToDecimal("1010")).toBe(10);
    expect(BinaryToDecimal("1111")).toBe(15);
    expect(BinaryToDecimal("10000000")).toBe(128);
  });

  it("should return NaN for non-binary input", () => {
    expect(BinaryToDecimal("2")).toBe(NaN);
    expect(BinaryToDecimal("123")).toBe(NaN);
    expect(BinaryToDecimal("abc")).toBe(NaN);
  });
});
