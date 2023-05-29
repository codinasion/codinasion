import { StringToHeaderCase } from "../StringToHeaderCase";

describe("StringToHeaderCase", () => {
  test("converts a string to header case", () => {
    expect(StringToHeaderCase("hello world")).toBe("Hello-World");
    expect(StringToHeaderCase("foo_bar_baz")).toBe("Foo-Bar-Baz");
    expect(StringToHeaderCase("the-quick-brown-fox")).toBe(
      "The-Quick-Brown-Fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToHeaderCase("")).toBe("");
  });
});
