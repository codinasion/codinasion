import { AsciiToOctal } from "./ascii-to-octal";

describe("AsciiToOctal", () => {
  it("should convert ASCII to octal", () => {
    expect(AsciiToOctal("Hello, world!")).toBe(
      "110145154154157054040167157162154144041",
    );
    expect(AsciiToOctal("")).toBe("");
  });
});
