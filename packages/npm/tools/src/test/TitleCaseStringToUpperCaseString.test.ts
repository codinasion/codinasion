import { TitleCaseStringToUpperCaseString } from "../TitleCaseStringToUpperCaseString";

describe("TitleCaseStringToUpperCaseString", () => {
  test("converts a TitleCase string to uppercase", () => {
    expect(TitleCaseStringToUpperCaseString("Title Case String")).toBe(
      "TITLE CASE STRING"
    );
    expect(TitleCaseStringToUpperCaseString("Another Title Case String")).toBe(
      "ANOTHER TITLE CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in uppercase", () => {
    expect(TitleCaseStringToUpperCaseString("UPPERCASE STRING")).toBe(
      "UPPERCASE STRING"
    );
  });
});
