import { UpperCaseStringToTitleCaseString } from "../UpperCaseStringToTitleCaseString";

describe("UpperCaseStringToTitleCaseString", () => {
  test("converts an uppercase string to title case", () => {
    expect(UpperCaseStringToTitleCaseString("UPPER CASE STRING")).toBe(
      "Upper Case String"
    );
    expect(UpperCaseStringToTitleCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "Another Upper Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in title case", () => {
    expect(UpperCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
