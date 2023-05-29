import { UpperCaseStringToCamelCaseString } from "../UpperCaseStringToCamelCaseString";

describe("UpperCaseStringToCamelCaseString", () => {
  test("converts an uppercase string to camelCase", () => {
    expect(UpperCaseStringToCamelCaseString("UPPER CASE STRING")).toBe(
      "upperCaseString"
    );
    expect(UpperCaseStringToCamelCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "anotherUpperCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(UpperCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
