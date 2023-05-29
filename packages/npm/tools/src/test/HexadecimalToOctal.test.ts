import { HexadecimalToOctal } from "../HexadecimalToOctal";

describe("HexadecimalToOctal", () => {
  test("converts a valid hexadecimal number to octal", () => {
    expect(HexadecimalToOctal("1A")).toBe("32");
    expect(HexadecimalToOctal("FF")).toBe("377");
    expect(HexadecimalToOctal("2E")).toBe("56");
  });

  test("throws an error for an invalid input", () => {
    expect(() => HexadecimalToOctal("G")).toThrow();
    expect(() => HexadecimalToOctal("1AG")).toThrow();
  });
});
