import { decimalToOctal } from "./decimal-to-octal";

describe("decimalToOctal", () => {
  it("should convert decimal numbers to octal strings correctly", () => {
    expect(decimalToOctal(10)).toBe("12");
    expect(decimalToOctal(255)).toBe("377");
    expect(decimalToOctal(4096)).toBe("10000");
    expect(decimalToOctal(0)).toBe("0");
    expect(decimalToOctal(1)).toBe("1");
    expect(decimalToOctal(8)).toBe("10");
  });
});
