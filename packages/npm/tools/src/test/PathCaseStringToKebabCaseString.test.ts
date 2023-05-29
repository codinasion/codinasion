import { PathCaseStringToKebabCaseString } from "../PathCaseStringToKebabCaseString";

describe("PathCaseStringToKebabCaseString", () => {
  test("converts a path-case string to kebab-case", () => {
    expect(PathCaseStringToKebabCaseString("path/case/string")).toBe(
      "path-case-string"
    );
    expect(PathCaseStringToKebabCaseString("another/path/case/string")).toBe(
      "another-path-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(PathCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(PathCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
