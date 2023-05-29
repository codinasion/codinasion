import { KebabCaseStringToPathCaseString } from "../KebabCaseStringToPathCaseString";

describe("KebabCaseStringToPathCaseString", () => {
  test("converts a kebab-case string to path/case", () => {
    expect(KebabCaseStringToPathCaseString("kebab-case-string")).toBe(
      "kebab/case/string"
    );
    expect(KebabCaseStringToPathCaseString("another-kebab-case-string")).toBe(
      "another/kebab/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(KebabCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
