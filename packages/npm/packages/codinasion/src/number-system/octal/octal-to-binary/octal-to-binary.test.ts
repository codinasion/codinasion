import { OctalToBinary } from "./octal-to-binary";

describe("OctalToBinary", () => {
  it("should convert octal to binary", () => {
    expect(OctalToBinary("777")).toBe("111111111");
    expect(OctalToBinary("56")).toBe("101110");
  });

  it("should return empty string for invalid input", () => {
    expect(OctalToBinary("G")).toBe("");
    expect(OctalToBinary("12G")).toBe("");
  });
});
