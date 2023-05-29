import { DecimalToOctal } from "../DecimalToOctal";

describe("DecimalToOctal", () => {
  it("should convert decimal to octal", () => {
    expect(DecimalToOctal(0)).toBe("0");
    expect(DecimalToOctal(1)).toBe("1");
    expect(DecimalToOctal(8)).toBe("10");
    expect(DecimalToOctal(63)).toBe("77");
    expect(DecimalToOctal(64)).toBe("100");
    expect(DecimalToOctal(511)).toBe("777");
    expect(DecimalToOctal(4096)).toBe("10000");
  });

  it("should return empty string for negative or NaN input", () => {
    expect(DecimalToOctal(-1)).toBe("");
    expect(DecimalToOctal(NaN)).toBe("");
  });
});
