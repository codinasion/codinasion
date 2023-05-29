import { CamelCaseStringToPascalCaseString } from "../CamelCaseStringToPascalCaseString";

describe("CamelCaseStringToPascalCaseString", () => {
  test("converts a camelCase string to PascalCase", () => {
    expect(CamelCaseStringToPascalCaseString("camelCaseString")).toBe(
      "CamelCaseString"
    );
    expect(CamelCaseStringToPascalCaseString("anotherCamelCaseString")).toBe(
      "AnotherCamelCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(CamelCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
