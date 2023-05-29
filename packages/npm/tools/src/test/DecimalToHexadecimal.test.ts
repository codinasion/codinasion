import { DecimalToHexadecimal } from "../DecimalToHexadecimal";

describe("DecimalToHexadecimal", () => {
  it("should convert decimal to hexadecimal", () => {
    expect(DecimalToHexadecimal(0)).toBe("0");
    expect(DecimalToHexadecimal(1)).toBe("1");
    expect(DecimalToHexadecimal(10)).toBe("a");
    expect(DecimalToHexadecimal(15)).toBe("f");
    expect(DecimalToHexadecimal(16)).toBe("10");
    expect(DecimalToHexadecimal(255)).toBe("ff");
    expect(DecimalToHexadecimal(4096)).toBe("1000");
  });

  it("should return empty string for negative or NaN input", () => {
    expect(DecimalToHexadecimal(-1)).toBe("");
    expect(DecimalToHexadecimal(NaN)).toBe("");
  });
});
