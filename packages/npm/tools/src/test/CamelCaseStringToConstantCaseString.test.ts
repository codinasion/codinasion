import { CamelCaseStringToConstantCaseString } from "../CamelCaseStringToConstantCaseString";

describe("CamelCaseStringToConstantCaseString", () => {
  test("converts camelCase to CONSTANT_CASE", () => {
    expect(CamelCaseStringToConstantCaseString("helloWorld")).toBe(
      "HELLO_WORLD"
    );
    expect(CamelCaseStringToConstantCaseString("thisIsATest")).toBe(
      "THIS_IS_A_TEST"
    );
    expect(CamelCaseStringToConstantCaseString("anotherExample")).toBe(
      "ANOTHER_EXAMPLE"
    );
  });

  test("returns empty string for empty input", () => {
    expect(CamelCaseStringToConstantCaseString("")).toBe("");
  });

  test("throws error for non-string input", () => {
    // @ts-ignore
    expect(() => CamelCaseStringToConstantCaseString(null)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToConstantCaseString(undefined)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToConstantCaseString(123)).toThrow();
    // @ts-ignore
    expect(() => CamelCaseStringToConstantCaseString({})).toThrow();
  });
});
