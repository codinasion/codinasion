import { ConstantCaseStringToKebabCaseString } from "../ConstantCaseStringToKebabCaseString";

describe("ConstantCaseStringToKebabCaseString", () => {
  test("converts a CONSTANT_CASE string to kebab-case", () => {
    expect(ConstantCaseStringToKebabCaseString("CONSTANT_CASE_STRING")).toBe(
      "constant-case-string"
    );
    expect(
      ConstantCaseStringToKebabCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("another-constant-case-string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToKebabCaseString("")).toBe("");
  });

  test("returns the same string if input is already in kebab-case", () => {
    expect(ConstantCaseStringToKebabCaseString("kebab-case-string")).toBe(
      "kebab-case-string"
    );
  });
});
