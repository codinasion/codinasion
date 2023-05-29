import { PascalCaseStringToCamelCaseString } from "../PascalCaseStringToCamelCaseString";

describe("PascalCaseStringToCamelCaseString", () => {
  test("converts a PascalCase string to camelCase", () => {
    expect(PascalCaseStringToCamelCaseString("PascalCaseString")).toBe(
      "pascalCaseString"
    );
    expect(PascalCaseStringToCamelCaseString("AnotherPascalCaseString")).toBe(
      "anotherPascalCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(PascalCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
