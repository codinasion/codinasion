import { KebabCaseStringToTitleCaseString } from "../KebabCaseStringToTitleCaseString";

describe("KebabCaseStringToTitleCaseString", () => {
  test("converts a kebab-case string to Title Case", () => {
    expect(KebabCaseStringToTitleCaseString("kebab-case-string")).toBe(
      "Kebab Case String"
    );
    expect(KebabCaseStringToTitleCaseString("another-kebab-case-string")).toBe(
      "Another Kebab Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(KebabCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
