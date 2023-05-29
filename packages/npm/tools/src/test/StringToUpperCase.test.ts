import { StringToUpperCase } from "../StringToUpperCase";

describe("StringToUpperCase", () => {
  test("converts a string to upper case", () => {
    expect(StringToUpperCase("Hello World")).toBe("HELLO WORLD");
    expect(StringToUpperCase("foo_bar_baz")).toBe("FOO_BAR_BAZ");
    expect(StringToUpperCase("The-Quick-Brown-Fox")).toBe(
      "THE-QUICK-BROWN-FOX"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToUpperCase("")).toBe("");
  });
});
