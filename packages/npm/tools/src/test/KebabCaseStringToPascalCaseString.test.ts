import { KebabCaseStringToPascalCaseString } from "../KebabCaseStringToPascalCaseString";

describe("KebabCaseStringToPascalCaseString", () => {
  test("converts a kebab-case string to PascalCase", () => {
    expect(KebabCaseStringToPascalCaseString("kebab-case-string")).toBe(
      "KebabCaseString"
    );
    expect(KebabCaseStringToPascalCaseString("another-kebab-case-string")).toBe(
      "AnotherKebabCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(KebabCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
