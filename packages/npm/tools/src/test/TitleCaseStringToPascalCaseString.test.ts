import { TitleCaseStringToPascalCaseString } from "../TitleCaseStringToPascalCaseString";

describe("TitleCaseStringToPascalCaseString", () => {
  test("converts a TitleCase string to PascalCase", () => {
    expect(TitleCaseStringToPascalCaseString("Title Case String")).toBe(
      "TitleCaseString"
    );
    expect(TitleCaseStringToPascalCaseString("Another Title Case String")).toBe(
      "AnotherTitleCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(TitleCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
