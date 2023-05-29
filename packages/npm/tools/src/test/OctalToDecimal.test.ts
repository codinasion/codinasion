import { OctalToDecimal } from "../OctalToDecimal";

describe("OctalToDecimal", () => {
  test("converts a valid octal number to decimal", () => {
    expect(OctalToDecimal("12")).toBe(10);
    expect(OctalToDecimal("777")).toBe(511);
    expect(OctalToDecimal("56")).toBe(46);
  });

  test("throws an error for an invalid input", () => {
    expect(() => OctalToDecimal("G")).toThrow();
    expect(() => OctalToDecimal("12G")).toThrow();
  });
});
