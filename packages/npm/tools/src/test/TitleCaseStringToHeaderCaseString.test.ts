import { TitleCaseStringToHeaderCaseString } from "../TitleCaseStringToHeaderCaseString";

describe("TitleCaseStringToHeaderCaseString", () => {
  test("converts a TitleCase string to Header-Case", () => {
    expect(TitleCaseStringToHeaderCaseString("Title Case String")).toBe(
      "Title-Case-String"
    );
    expect(TitleCaseStringToHeaderCaseString("Another Title Case String")).toBe(
      "Another-Title-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(TitleCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
