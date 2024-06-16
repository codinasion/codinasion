import { DecimalToOctal } from "./decimal-to-octal";

describe("DecimalToOctal", () => {
  it("should convert decimal to octal", () => {
    expect(DecimalToOctal(511)).toBe("777");
    expect(DecimalToOctal(4096)).toBe("10000");
  });

  it("should return empty string for invalid input", () => {
    expect(DecimalToOctal(-1)).toBe("");
    expect(DecimalToOctal(NaN)).toBe("");
  });
});
