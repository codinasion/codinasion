import { StringToCamelCase } from "../StringToCamelCase";

describe("StringToCamelCase", () => {
  test("converts a string to camel case", () => {
    expect(StringToCamelCase("hello world")).toBe("helloWorld");
    expect(StringToCamelCase("foo_bar_baz")).toBe("fooBarBaz");
    expect(StringToCamelCase("the-quick-brown-fox")).toBe("theQuickBrownFox");
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToCamelCase("")).toBe("");
  });
});
