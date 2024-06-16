import { DecimalToBinary } from "./decimal-to-binary";

describe("DecimalToBinary", () => {
  it("should convert decimal to binary", () => {
    expect(DecimalToBinary(15)).toBe("1111");
    expect(DecimalToBinary(128)).toBe("10000000");
  });

  it("should return empty string for invalid input", () => {
    expect(DecimalToBinary(-1)).toBe("");
    expect(DecimalToBinary(NaN)).toBe("");
  });
});
