import { StringToConstantCase } from "../StringToConstantCase";

describe("StringToConstantCase", () => {
  test("converts a string to constant case", () => {
    expect(StringToConstantCase("hello world")).toBe("HELLO_WORLD");
    expect(StringToConstantCase("foo_bar_baz")).toBe("FOO_BAR_BAZ");
    expect(StringToConstantCase("the-quick-brown-fox")).toBe(
      "THE_QUICK_BROWN_FOX"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToConstantCase("")).toBe("");
  });
});
