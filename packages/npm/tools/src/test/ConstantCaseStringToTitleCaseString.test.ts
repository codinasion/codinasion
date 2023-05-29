import { ConstantCaseStringToTitleCaseString } from "../ConstantCaseStringToTitleCaseString";

describe("ConstantCaseStringToTitleCaseString", () => {
  test("converts a CONSTANT_CASE string to Title Case", () => {
    expect(ConstantCaseStringToTitleCaseString("CONSTANT_CASE_STRING")).toBe(
      "Constant Case String"
    );
    expect(
      ConstantCaseStringToTitleCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("Another Constant Case String");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(ConstantCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
