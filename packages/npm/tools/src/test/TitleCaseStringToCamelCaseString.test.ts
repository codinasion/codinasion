import { TitleCaseStringToCamelCaseString } from "../TitleCaseStringToCamelCaseString";

describe("TitleCaseStringToCamelCaseString", () => {
  test("converts a TitleCase string to camelCase", () => {
    expect(TitleCaseStringToCamelCaseString("Title Case String")).toBe(
      "titleCaseString"
    );
    expect(TitleCaseStringToCamelCaseString("Another Title Case String")).toBe(
      "anotherTitleCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(TitleCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
