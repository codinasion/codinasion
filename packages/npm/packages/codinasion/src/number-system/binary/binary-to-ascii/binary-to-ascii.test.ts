import { BinaryToAscii } from "./binary-to-ascii";

describe("BinaryToAscii", () => {
  it("should convert binary to ASCII", () => {
    expect(
      BinaryToAscii(
        "01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001",
      ),
    ).toBe("Hello, world!");
    expect(BinaryToAscii("")).toBe("");
  });
});
