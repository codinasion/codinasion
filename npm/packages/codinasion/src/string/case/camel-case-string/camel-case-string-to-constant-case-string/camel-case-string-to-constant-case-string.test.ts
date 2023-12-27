import { CamelCaseStringToConstantCaseString } from "./camel-case-string-to-constant-case-string";

describe("CamelCaseStringToConstantCaseString", () => {
  test("converts camelCase to CONSTANT_CASE", () => {
    expect(CamelCaseStringToConstantCaseString("helloWorld")).toBe(
      "HELLO_WORLD",
    );
    expect(CamelCaseStringToConstantCaseString("thisIsATest")).toBe(
      "THIS_IS_A_TEST",
    );
    expect(CamelCaseStringToConstantCaseString("anotherExample")).toBe(
      "ANOTHER_EXAMPLE",
    );
  });

  test("returns empty string for empty input", () => {
    expect(CamelCaseStringToConstantCaseString("")).toBe("");
  });

  test("throws error for non-string input", () => {
    expect(() =>
      CamelCaseStringToConstantCaseString(null as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToConstantCaseString(undefined as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToConstantCaseString(123 as unknown as string),
    ).toThrow();
    expect(() =>
      CamelCaseStringToConstantCaseString({} as unknown as string),
    ).toThrow();
  });
});
