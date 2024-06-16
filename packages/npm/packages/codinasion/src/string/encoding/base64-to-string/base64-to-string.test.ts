import { Base64ToString } from "./base64-to-string";

describe("Base64ToString", () => {
  it("should decode a base64 string to a regular string", () => {
    const base64Str = "SGVsbG8sIHdvcmxkIQ==";
    const expected = "Hello, world!";
    const result = Base64ToString(base64Str);
    expect(result).toEqual(expected);
  });

  it("should return an empty string when given an empty string", () => {
    const base64Str = "";
    const expected = "";
    const result = Base64ToString(base64Str);
    expect(result).toEqual(expected);
  });
});
