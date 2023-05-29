import { CamelCaseStringToDotCaseString } from "../CamelCaseStringToDotCaseString";

describe("CamelCaseStringToDotCaseString", () => {
  test("converts camelCase to dot.case", () => {
    expect(CamelCaseStringToDotCaseString("helloWorld")).toBe("hello.world");
    expect(CamelCaseStringToDotCaseString("thisIsATest")).toBe(
      "this.is.a.test"
    );
    expect(CamelCaseStringToDotCaseString("anotherExample")).toBe(
      "another.example"
    );
  });

  test("returns empty string for empty input", () => {
    expect(CamelCaseStringToDotCaseString("")).toBe("");
  });

  test("throws error for non-string input", () => {
    // @ts-ignore
    expect(() => CamelCaseStringToDotCaseString(null)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToDotCaseString(undefined)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToDotCaseString(123)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToDotCaseString({})).toThrow();
  });
});
