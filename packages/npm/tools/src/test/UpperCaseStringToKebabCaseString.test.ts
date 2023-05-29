import { UpperCaseStringToKebabCaseString } from "../UpperCaseStringToKebabCaseString";

describe("UpperCaseStringToKebabCaseString", () => {
  test("converts an uppercase string to kebab-case", () => {
    expect(UpperCaseStringToKebabCaseString("UPPER CASE STRING")).toBe(
      "upper-case-string"
    );
    expect(UpperCaseStringToKebabCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "another-upper-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(UpperCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
