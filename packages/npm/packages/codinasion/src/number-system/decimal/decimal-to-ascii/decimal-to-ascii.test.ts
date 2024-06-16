import { DecimalToAscii } from "./decimal-to-ascii";

describe("DecimalToAscii", () => {
  it("should convert decimal to ASCII", () => {
    expect(DecimalToAscii(72)).toBe("H");
    expect(DecimalToAscii(101)).toBe("e");
    expect(DecimalToAscii(108)).toBe("l");
    expect(DecimalToAscii(111)).toBe("o");
    expect(DecimalToAscii(44)).toBe(",");
    expect(DecimalToAscii(32)).toBe(" ");
    expect(DecimalToAscii(119)).toBe("w");
    expect(DecimalToAscii(114)).toBe("r");
    expect(DecimalToAscii(100)).toBe("d");
    expect(DecimalToAscii(33)).toBe("!");
  });

  it("should return empty string for invalid input", () => {
    expect(DecimalToAscii(-1)).toBe("");
    expect(DecimalToAscii(256)).toBe("");
  });
});
