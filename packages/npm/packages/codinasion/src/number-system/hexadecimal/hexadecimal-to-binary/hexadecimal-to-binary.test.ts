import { HexadecimalToBinary } from "./hexadecimal-to-binary";

describe("HexadecimalToBinary", () => {
  it("should convert hexadecimal to binary", () => {
    expect(HexadecimalToBinary("FF")).toBe("11111111");
    expect(HexadecimalToBinary("2E")).toBe("00101110");
  });

  it("should return empty string for invalid input", () => {
    expect(HexadecimalToBinary("G")).toBe("");
    expect(HexadecimalToBinary("1AG")).toBe("");
  });
});
