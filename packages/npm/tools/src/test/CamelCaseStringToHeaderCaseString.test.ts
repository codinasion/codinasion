import { CamelCaseStringToHeaderCaseString } from "../CamelCaseStringToHeaderCaseString";

describe("CamelCaseStringToHeaderCaseString", () => {
  test("converts a camelCase string to header-case", () => {
    expect(CamelCaseStringToHeaderCaseString("camelCaseString")).toBe(
      "Camel-Case-String"
    );
    expect(CamelCaseStringToHeaderCaseString("anotherCamelCaseString")).toBe(
      "Another-Camel-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in header-case", () => {
    expect(CamelCaseStringToHeaderCaseString("header-case-string")).toBe(
      "Header-Case-String"
    );
    expect(CamelCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
