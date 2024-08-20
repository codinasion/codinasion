import { decimalToHexadecimal } from "./decimal-to-hexadecimal";

describe("decimalToHexadecimal", () => {
  it("should convert decimal numbers to hexadecimal strings correctly", () => {
    expect(decimalToHexadecimal(10)).toBe("A");
    expect(decimalToHexadecimal(255)).toBe("FF");
    expect(decimalToHexadecimal(4096)).toBe("1000");
    expect(decimalToHexadecimal(0)).toBe("0");
    expect(decimalToHexadecimal(1)).toBe("1");
    expect(decimalToHexadecimal(16)).toBe("10");
  });
});
