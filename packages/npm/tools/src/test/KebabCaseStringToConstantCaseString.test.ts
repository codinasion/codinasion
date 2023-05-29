import { KebabCaseStringToConstantCaseString } from "../KebabCaseStringToConstantCaseString";

describe("KebabCaseStringToConstantCaseString", () => {
  test("converts a kebab-case string to CONSTANT_CASE", () => {
    expect(KebabCaseStringToConstantCaseString("kebab-case-string")).toBe(
      "KEBAB_CASE_STRING"
    );
    expect(
      KebabCaseStringToConstantCaseString("another-kebab-case-string")
    ).toBe("ANOTHER_KEBAB_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(KebabCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(KebabCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
