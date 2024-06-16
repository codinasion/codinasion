import { StringToBase64 } from "./string-to-base64";

describe("StringToBase64", () => {
  it("should encode a string to base64", () => {
    const str = "Hello, world!";
    const expected = "SGVsbG8sIHdvcmxkIQ==";
    const result = StringToBase64(str);
    expect(result).toEqual(expected);
  });

  it("should return an empty string when given an empty string", () => {
    const str = "";
    const expected = "";
    const result = StringToBase64(str);
    expect(result).toEqual(expected);
  });
});
