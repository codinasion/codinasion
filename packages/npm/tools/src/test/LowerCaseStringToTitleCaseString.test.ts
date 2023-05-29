import { LowerCaseStringToTitleCaseString } from "../LowerCaseStringToTitleCaseString";

describe("LowerCaseStringToTitleCaseString", () => {
  test("converts a lower case string to title case", () => {
    expect(LowerCaseStringToTitleCaseString("lower case string")).toBe(
      "Lower Case String"
    );
    expect(LowerCaseStringToTitleCaseString("another lower case string")).toBe(
      "Another Lower Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(LowerCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in title case", () => {
    expect(LowerCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
