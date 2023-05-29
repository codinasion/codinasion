import { OctalToHexadecimal } from "../OctalToHexadecimal";

describe("OctalToHexadecimal", () => {
  test("converts a valid octal number to hexadecimal", () => {
    expect(OctalToHexadecimal("12")).toBe("A");
    expect(OctalToHexadecimal("777")).toBe("1FF");
    expect(OctalToHexadecimal("56")).toBe("2E");
  });

  test("throws an error for an invalid input", () => {
    expect(() => OctalToHexadecimal("G")).toThrow();
    expect(() => OctalToHexadecimal("12G")).toThrow();
  });
});
