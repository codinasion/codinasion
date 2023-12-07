import { HexadecimalToOctal } from "./hexadecimal-to-octal";

describe("HexadecimalToOctal", () => {
  it("should convert hexadecimal to octal", () => {
    expect(HexadecimalToOctal("FF")).toBe("377");
    expect(HexadecimalToOctal("2E")).toBe("56");
  });

  it("should return empty string for invalid input", () => {
    expect(HexadecimalToOctal("G")).toBe("");
    expect(HexadecimalToOctal("1AG")).toBe("");
  });
});
