import { ConstantCaseStringToDotCaseString } from "../ConstantCaseStringToDotCaseString";

describe("ConstantCaseStringToDotCaseString", () => {
  test("converts a CONSTANT_CASE string to dot.case", () => {
    expect(ConstantCaseStringToDotCaseString("CONSTANT_CASE_STRING")).toBe(
      "constant.case.string"
    );
    expect(
      ConstantCaseStringToDotCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("another.constant.case.string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(ConstantCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
