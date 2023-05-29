import { CamelCaseStringToTitleCaseString } from "../CamelCaseStringToTitleCaseString";

describe("CamelCaseStringToTitleCaseString", () => {
  test("converts a camelCase string to Title Case", () => {
    expect(CamelCaseStringToTitleCaseString("camelCaseString")).toBe(
      "Camel Case String"
    );
    expect(CamelCaseStringToTitleCaseString("anotherCamelCaseString")).toBe(
      "Another Camel Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(CamelCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(CamelCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
