import { KebabCaseStringToUpperCaseString } from "../KebabCaseStringToUpperCaseString";

describe("KebabCaseStringToUpperCaseString", () => {
  test("converts a kebab-case string to uppercase", () => {
    expect(KebabCaseStringToUpperCaseString("kebab-case-string")).toBe(
      "KEBAB CASE STRING"
    );
    expect(KebabCaseStringToUpperCaseString("another-kebab-case-string")).toBe(
      "ANOTHER KEBAB CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in uppercase", () => {
    expect(KebabCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
