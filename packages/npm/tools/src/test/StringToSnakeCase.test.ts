import { StringToSnakeCase } from "../StringToSnakeCase";

describe("StringToSnakeCase", () => {
  test("converts a string to snake case", () => {
    expect(StringToSnakeCase("hello world")).toBe("hello_world");
    expect(StringToSnakeCase("foo_bar_baz")).toBe("foo_bar_baz");
    expect(StringToSnakeCase("the-quick-brown-fox")).toBe(
      "the_quick_brown_fox"
    );
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToSnakeCase("")).toBe("");
  });
});
