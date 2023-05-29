import { PathCaseStringToConstantCaseString } from "../PathCaseStringToConstantCaseString";

describe("PathCaseStringToConstantCaseString", () => {
  test("converts a path-case string to CONSTANT_CASE", () => {
    expect(PathCaseStringToConstantCaseString("path/case/string")).toBe(
      "PATH_CASE_STRING"
    );
    expect(PathCaseStringToConstantCaseString("another/path/case/string")).toBe(
      "ANOTHER_PATH_CASE_STRING"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(PathCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
