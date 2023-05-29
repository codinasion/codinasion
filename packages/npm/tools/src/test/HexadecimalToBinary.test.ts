import { HexadecimalToBinary } from "../HexadecimalToBinary";

describe("HexadecimalToBinary", () => {
  test("converts a valid hexadecimal number to binary", () => {
    expect(HexadecimalToBinary("1A")).toBe("00011010");
    expect(HexadecimalToBinary("FF")).toBe("11111111");
    expect(HexadecimalToBinary("2E")).toBe("00101110");
  });

  test("throws an error for an invalid input", () => {
    expect(() => HexadecimalToBinary("G")).toThrow();
    expect(() => HexadecimalToBinary("1AG")).toThrow();
  });
});
