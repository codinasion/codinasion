import { StringToTitleCase } from "../StringToTitleCase";

describe("StringToTitleCase", () => {
  test("converts a string to title case", () => {
    expect(StringToTitleCase("hello world")).toBe("Hello World");
    expect(StringToTitleCase("foo_bar_baz")).toBe("Foo Bar Baz");
    expect(StringToTitleCase("the-quick-brown-fox")).toBe(
      "The Quick Brown Fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToTitleCase("")).toBe("");
  });
});
