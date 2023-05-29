import { PathCaseStringToTitleCaseString } from "../PathCaseStringToTitleCaseString";

describe("PathCaseStringToTitleCaseString", () => {
  test("converts a path-case string to Title Case", () => {
    expect(PathCaseStringToTitleCaseString("path/case/string")).toBe(
      "Path Case String"
    );
    expect(PathCaseStringToTitleCaseString("another/path/case/string")).toBe(
      "Another Path Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(PathCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
