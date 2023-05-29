import { PathCaseStringToHeaderCaseString } from "../PathCaseStringToHeaderCaseString";

describe("PathCaseStringToHeaderCaseString", () => {
  test("converts a path-case string to Header-Case", () => {
    expect(PathCaseStringToHeaderCaseString("path/case/string")).toBe(
      "Path-Case-String"
    );
    expect(PathCaseStringToHeaderCaseString("another/path/case/string")).toBe(
      "Another-Path-Case-String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToHeaderCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Header-Case", () => {
    expect(PathCaseStringToHeaderCaseString("Header-Case-String")).toBe(
      "Header-Case-String"
    );
  });
});
