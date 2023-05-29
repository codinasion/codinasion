import { StringToPascalCase } from "../StringToPascalCase";

describe("StringToPascalCase", () => {
  test("converts a string to Pascal case", () => {
    expect(StringToPascalCase("hello world")).toBe("HelloWorld");
    expect(StringToPascalCase("foo_bar_baz")).toBe("FooBarBaz");
    expect(StringToPascalCase("the-quick-brown-fox")).toBe("TheQuickBrownFox");
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToPascalCase("")).toBe("");
  });
});
