import { PascalCaseStringToPathCaseString } from "../PascalCaseStringToPathCaseString";

describe("PascalCaseStringToPathCaseString", () => {
  test("converts a PascalCase string to path-case", () => {
    expect(PascalCaseStringToPathCaseString("PascalCaseString")).toBe(
      "pascal/case/string"
    );
    expect(PascalCaseStringToPathCaseString("AnotherPascalCaseString")).toBe(
      "another/pascal/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PascalCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path-case", () => {
    expect(PascalCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
