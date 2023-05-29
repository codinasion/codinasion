import { HexadecimalToDecimal } from "../HexadecimalToDecimal";

describe("HexadecimalToDecimal", () => {
  test("converts a valid hexadecimal number to decimal", () => {
    expect(HexadecimalToDecimal("1A")).toBe(26);
    expect(HexadecimalToDecimal("FF")).toBe(255);
    expect(HexadecimalToDecimal("2E")).toBe(46);
  });

  test("throws an error for an invalid input", () => {
    expect(() => HexadecimalToDecimal("G")).toThrow();
    expect(() => HexadecimalToDecimal("1AG")).toThrow();
  });
});
