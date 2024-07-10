import { HexadecimalToDecimal } from "./hexadecimal-to-decimal";

describe("HexadecimalToDecimal", () => {
  it("should convert hexadecimal to decimal", () => {
    expect(HexadecimalToDecimal("FF")).toBe(255);
    expect(HexadecimalToDecimal("2E")).toBe(46);
  });

  it("should return NaN for invalid input", () => {
    expect(HexadecimalToDecimal("G")).toBe(NaN);
    expect(HexadecimalToDecimal("1AG")).toBe(NaN);
  });
});
