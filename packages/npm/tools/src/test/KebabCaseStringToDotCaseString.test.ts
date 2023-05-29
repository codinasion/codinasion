import { KebabCaseStringToDotCaseString } from "../KebabCaseStringToDotCaseString";

describe("KebabCaseStringToDotCaseString", () => {
  test("converts a kebab-case string to dot.case", () => {
    expect(KebabCaseStringToDotCaseString("kebab-case-string")).toBe(
      "kebab.case.string"
    );
    expect(KebabCaseStringToDotCaseString("another-kebab-case-string")).toBe(
      "another.kebab.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(KebabCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
