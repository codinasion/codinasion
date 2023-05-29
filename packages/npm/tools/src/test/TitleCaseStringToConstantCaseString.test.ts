import { TitleCaseStringToConstantCaseString } from "../TitleCaseStringToConstantCaseString";

describe("TitleCaseStringToConstantCaseString", () => {
  test("converts a TitleCase string to CONSTANT_CASE", () => {
    expect(TitleCaseStringToConstantCaseString("Title Case String")).toBe(
      "TITLE_CASE_STRING"
    );
    expect(
      TitleCaseStringToConstantCaseString("Another Title Case String")
    ).toBe("ANOTHER_TITLE_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(TitleCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
