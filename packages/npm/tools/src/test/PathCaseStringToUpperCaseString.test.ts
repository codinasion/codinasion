import { PathCaseStringToUpperCaseString } from "../PathCaseStringToUpperCaseString";

describe("PathCaseStringToUpperCaseString", () => {
  test("converts a path-case string to upper case", () => {
    expect(PathCaseStringToUpperCaseString("path/case/string")).toBe(
      "PATH CASE STRING"
    );
    expect(PathCaseStringToUpperCaseString("another/path/case/string")).toBe(
      "ANOTHER PATH CASE STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in upper case", () => {
    expect(PathCaseStringToUpperCaseString("UPPER CASE STRING")).toBe(
      "UPPER CASE STRING"
    );
  });
});
