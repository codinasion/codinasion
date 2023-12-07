import { HexadecimalToAscii } from "./hexadecimal-to-ascii";

describe("HexadecimalToAscii", () => {
  it("should convert hexadecimal to ASCII", () => {
    expect(HexadecimalToAscii("48656C6C6F2C20776F726C6421")).toBe(
      "Hello, world!",
    );
    expect(HexadecimalToAscii("")).toBe("");
  });
});
