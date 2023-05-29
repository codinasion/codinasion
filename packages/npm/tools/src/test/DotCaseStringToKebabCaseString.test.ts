import { DotCaseStringToKebabCaseString } from "../DotCaseStringToKebabCaseString";

describe("DotCaseStringToKebabCaseString", () => {
  test("converts a dot.case string to kebab-case", () => {
    expect(DotCaseStringToKebabCaseString("dot.case.string")).toBe(
      "dot-case-string"
    );
    expect(DotCaseStringToKebabCaseString("another.dot.case.string")).toBe(
      "another-dot-case-string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(DotCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
