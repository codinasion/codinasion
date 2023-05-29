import { TitleCaseStringToLowerCaseString } from "../TitleCaseStringToLowerCaseString";

describe("TitleCaseStringToLowerCaseString", () => {
  test("converts a TitleCase string to lower case", () => {
    expect(TitleCaseStringToLowerCaseString("Title Case String")).toBe(
      "title case string"
    );
    expect(TitleCaseStringToLowerCaseString("Another Title Case String")).toBe(
      "another title case string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToLowerCaseString("")).toBe("");
  });

  test("returns the same string if input is already in lower case", () => {
    expect(TitleCaseStringToLowerCaseString("lower case string")).toBe(
      "lower case string"
    );
  });
});
