import { AsciiToHexadecimal } from "./ascii-to-hexadecimal";

describe("AsciiToHexadecimal", () => {
  it("should convert ASCII to hexadecimal", () => {
    expect(AsciiToHexadecimal("Hello, world!")).toBe(
      "48656C6C6F2C20776F726C6421",
    );
    expect(AsciiToHexadecimal("")).toBe("");
  });
});
