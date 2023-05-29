import { StringToDotCase } from "../StringToDotCase";

describe("StringToDotCase", () => {
  test("converts a string to dot case", () => {
    expect(StringToDotCase("hello world")).toBe("hello.world");
    expect(StringToDotCase("foo_bar_baz")).toBe("foo.bar.baz");
    expect(StringToDotCase("the-quick-brown-fox")).toBe("the.quick.brown.fox");
  });

  test("returns an empty string for an empty input", () => {
    expect(StringToDotCase("")).toBe("");
  });
});
