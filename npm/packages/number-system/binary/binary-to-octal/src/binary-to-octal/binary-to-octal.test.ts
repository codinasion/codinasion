import { BinaryToOctal } from "./binary-to-octal";

describe("BinaryToOctal", () => {
  it("should convert binary to octal", () => {
    expect(BinaryToOctal("1111")).toBe("17");
    expect(BinaryToOctal("10000000")).toBe("200");
  });

  it("should return empty string for invalid input", () => {
    expect(BinaryToOctal("123")).toBe("");
    expect(BinaryToOctal("abc")).toBe("");
  });
});
