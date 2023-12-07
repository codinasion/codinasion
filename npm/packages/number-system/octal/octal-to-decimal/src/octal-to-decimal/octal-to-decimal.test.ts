import { OctalToDecimal } from "./octal-to-decimal";

describe("OctalToDecimal", () => {
  it("should convert octal to decimal", () => {
    expect(OctalToDecimal("777")).toBe(511);
    expect(OctalToDecimal("56")).toBe(46);
  });

  it("should return NaN for invalid input", () => {
    expect(OctalToDecimal("G")).toBe(NaN);
    expect(OctalToDecimal("12G")).toBe(NaN);
  });
});
