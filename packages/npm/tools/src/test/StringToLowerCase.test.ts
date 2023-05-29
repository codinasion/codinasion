import { StringToLowerCase } from "../StringToLowerCase";

describe("StringToLowerCase", () => {
  test("converts a string to lower case", () => {
    expect(StringToLowerCase("Hello World")).toBe("hello world");
    expect(StringToLowerCase("FOO_BAR_BAZ")).toBe("foo_bar_baz");
    expect(StringToLowerCase("The-Quick-Brown-Fox")).toBe(
      "the-quick-brown-fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToLowerCase("")).toBe("");
  });
});
