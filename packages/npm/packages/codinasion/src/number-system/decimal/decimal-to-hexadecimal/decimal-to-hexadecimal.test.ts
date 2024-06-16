import { DecimalToHexadecimal } from "./decimal-to-hexadecimal";

describe("DecimalToHexadecimal", () => {
  it("should convert decimal to hexadecimal", () => {
    expect(DecimalToHexadecimal(255)).toBe("FF");
    expect(DecimalToHexadecimal(4096)).toBe("1000");
  });

  it("should return empty string for invalid input", () => {
    expect(DecimalToHexadecimal(-1)).toBe("");
    expect(DecimalToHexadecimal(NaN)).toBe("");
  });
});
