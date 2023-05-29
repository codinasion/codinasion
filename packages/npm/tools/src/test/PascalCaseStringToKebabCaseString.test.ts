import { PascalCaseStringToKebabCaseString } from "../PascalCaseStringToKebabCaseString";

describe("PascalCaseStringToKebabCaseString", () => {
  test("converts a PascalCase string to kebab-case", () => {
    expect(PascalCaseStringToKebabCaseString("PascalCaseString")).toBe(
      "pascal-case-string"
    );
    expect(PascalCaseStringToKebabCaseString("AnotherPascalCaseString")).toBe(
      "another-pascal-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(PascalCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
