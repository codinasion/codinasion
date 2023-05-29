import { UpperCaseStringToPathCaseString } from "../UpperCaseStringToPathCaseString";

describe("UpperCaseStringToPathCaseString", () => {
  test("converts an uppercase string to path-case", () => {
    expect(UpperCaseStringToPathCaseString("UPPER CASE STRING")).toBe(
      "upper/case/string"
    );
    expect(UpperCaseStringToPathCaseString("ANOTHER UPPER CASE STRING")).toBe(
      "another/upper/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(UpperCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path-case", () => {
    expect(UpperCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
