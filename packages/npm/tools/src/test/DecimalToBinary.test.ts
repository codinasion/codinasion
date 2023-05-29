import { DecimalToBinary } from "../DecimalToBinary";

describe("DecimalToBinary", () => {
  it("should convert decimal to binary", () => {
    expect(DecimalToBinary(0)).toBe("0");
    expect(DecimalToBinary(1)).toBe("1");
    expect(DecimalToBinary(2)).toBe("10");
    expect(DecimalToBinary(3)).toBe("11");
    expect(DecimalToBinary(10)).toBe("1010");
    expect(DecimalToBinary(15)).toBe("1111");
    expect(DecimalToBinary(128)).toBe("10000000");
  });

  it("should return empty string for negative or NaN input", () => {
    expect(DecimalToBinary(-1)).toBe("");
    expect(DecimalToBinary(NaN)).toBe("");
  });
});
