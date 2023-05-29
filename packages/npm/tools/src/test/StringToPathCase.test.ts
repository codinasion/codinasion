import { StringToPathCase } from "../StringToPathCase";

describe("StringToPathCase", () => {
  test("converts a string to path case", () => {
    expect(StringToPathCase("hello world")).toBe("hello/world");
    expect(StringToPathCase("foo_bar_baz")).toBe("foo/bar/baz");
    expect(StringToPathCase("the-quick-brown-fox")).toBe("the/quick/brown/fox");
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToPathCase("")).toBe("");
  });
});
