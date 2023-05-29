import { TitleCaseStringToKebabCaseString } from "../TitleCaseStringToKebabCaseString";

describe("TitleCaseStringToKebabCaseString", () => {
  test("converts a TitleCase string to kebab-case", () => {
    expect(TitleCaseStringToKebabCaseString("Title Case String")).toBe(
      "title-case-string"
    );
    expect(TitleCaseStringToKebabCaseString("Another Title Case String")).toBe(
      "another-title-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(TitleCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
