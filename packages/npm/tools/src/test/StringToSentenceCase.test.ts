import { StringToSentenceCase } from "../StringToSentenceCase";

describe("StringToSentenceCase", () => {
  test("converts a string to sentence case", () => {
    expect(StringToSentenceCase("hello world")).toBe("Hello world");
    expect(StringToSentenceCase("FOO_BAR_BAZ")).toBe("Foo_bar_baz");
    expect(StringToSentenceCase("the-quick-brown-fox")).toBe(
      "The-quick-brown-fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToSentenceCase("")).toBe("");
  });
});
