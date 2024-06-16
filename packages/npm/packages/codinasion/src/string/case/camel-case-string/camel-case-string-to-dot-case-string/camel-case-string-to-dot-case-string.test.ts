import { CamelCaseStringToDotCaseString } from "./camel-case-string-to-dot-case-string";

describe("CamelCaseStringToDotCaseString", () => {
  test("converts camelCase to dot.case", () => {
    expect(CamelCaseStringToDotCaseString("helloWorld")).toBe("hello.world");
    expect(CamelCaseStringToDotCaseString("thisIsATest")).toBe(
      "this.is.a.test",
    );
    expect(CamelCaseStringToDotCaseString("anotherExample")).toBe(
      "another.example",
    );
  });

  test("returns empty string for empty input", () => {
    expect(CamelCaseStringToDotCaseString("")).toBe("");
  });

  test("throws error for non-string input", () => {
    expect(() =>
      CamelCaseStringToDotCaseString(null as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToDotCaseString(undefined as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToDotCaseString(123 as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToDotCaseString({} as unknown as string),
    ).toThrow();
  });
});
