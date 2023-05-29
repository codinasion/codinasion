import { StringToKebabCase } from "../StringToKebabCase";

describe("StringToKebabCase", () => {
  test("converts a string to kebab case", () => {
    expect(StringToKebabCase("hello world")).toBe("hello-world");
    expect(StringToKebabCase("foo_bar_baz")).toBe("foo-bar-baz");
    expect(StringToKebabCase("the-quick-brown-fox")).toBe(
      "the-quick-brown-fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToKebabCase("")).toBe("");
  });
});
