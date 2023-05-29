import { OctalToBinary } from "../OctalToBinary";

describe("OctalToBinary", () => {
  test("converts a valid octal number to binary", () => {
    expect(OctalToBinary("12")).toBe("001010");
    expect(OctalToBinary("777")).toBe("111111111");
    expect(OctalToBinary("56")).toBe("101110");
  });

  test("throws an error for an invalid input", () => {
    expect(() => OctalToBinary("G")).toThrow();
    expect(() => OctalToBinary("12G")).toThrow();
  });
});
