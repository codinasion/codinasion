import { BinaryToHexadecimal } from "../BinaryToHexadecimal";

describe("BinaryToHexadecimal", () => {
  it("should convert binary to hexadecimal", () => {
    expect(BinaryToHexadecimal("0")).toBe("0");
    expect(BinaryToHexadecimal("1")).toBe("1");
    expect(BinaryToHexadecimal("10")).toBe("2");
    expect(BinaryToHexadecimal("11")).toBe("3");
    expect(BinaryToHexadecimal("1010")).toBe("a");
    expect(BinaryToHexadecimal("1111")).toBe("f");
    expect(BinaryToHexadecimal("10000000")).toBe("80");
  });

  it("should return empty string for non-binary input", () => {
    expect(BinaryToHexadecimal("2")).toBe("");
    expect(BinaryToHexadecimal("123")).toBe("");
    expect(BinaryToHexadecimal("abc")).toBe("");
  });
});
