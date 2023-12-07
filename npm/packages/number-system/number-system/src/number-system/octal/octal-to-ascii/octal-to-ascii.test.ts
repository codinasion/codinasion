import { OctalToAscii } from "./octal-to-ascii";

describe("OctalToAscii", () => {
  it("should convert octal to ASCII", () => {
    expect(OctalToAscii("110145154154157054040167157162154144041")).toBe(
      "Hello, world!",
    );
    expect(OctalToAscii("")).toBe("");
  });
});
