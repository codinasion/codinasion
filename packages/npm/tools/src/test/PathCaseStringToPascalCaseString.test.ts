import { PathCaseStringToPascalCaseString } from "../PathCaseStringToPascalCaseString";

describe("PathCaseStringToPascalCaseString", () => {
  test("converts a path-case string to PascalCase", () => {
    expect(PathCaseStringToPascalCaseString("path/case/string")).toBe(
      "PathCaseString"
    );
    expect(PathCaseStringToPascalCaseString("another/path/case/string")).toBe(
      "AnotherPathCaseString"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(PathCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
