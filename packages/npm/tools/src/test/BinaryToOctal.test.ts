import { BinaryToOctal } from "../BinaryToOctal";

describe("BinaryToOctal", () => {
  it("should convert binary to octal", () => {
    expect(BinaryToOctal("0")).toBe("0");
    expect(BinaryToOctal("1")).toBe("1");
    expect(BinaryToOctal("10")).toBe("2");
    expect(BinaryToOctal("11")).toBe("3");
    expect(BinaryToOctal("1010")).toBe("12");
    expect(BinaryToOctal("1111")).toBe("17");
    expect(BinaryToOctal("10000000")).toBe("200");
  });

  it("should return empty string for non-binary input", () => {
    expect(BinaryToOctal("2")).toBe("");
    expect(BinaryToOctal("123")).toBe("");
    expect(BinaryToOctal("abc")).toBe("");
  });
});
