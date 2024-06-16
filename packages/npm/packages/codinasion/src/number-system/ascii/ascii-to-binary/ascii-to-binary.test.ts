import { AsciiToBinary } from "./ascii-to-binary";

describe("AsciiToBinary", () => {
  it("should convert ASCII to binary", () => {
    expect(AsciiToBinary("Hello, world!")).toBe(
      "01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001",
    );
    expect(AsciiToBinary("")).toBe("");
  });
});
