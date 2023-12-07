import { OctalToHexadecimal } from "./octal-to-hexadecimal";

describe("OctalToHexadecimal", () => {
  it("should convert octal to hexadecimal", () => {
    expect(OctalToHexadecimal("12")).toBe("A");
    expect(OctalToHexadecimal("777")).toBe("1FF");
  });

  it("should return empty string for invalid input", () => {
    expect(OctalToHexadecimal("G")).toBe("");
    expect(OctalToHexadecimal("12G")).toBe("");
  });
});
