import { ConstantCaseStringToCamelCaseString } from "../ConstantCaseStringToCamelCaseString";

describe("ConstantCaseStringToCamelCaseString", () => {
  test("converts a CONSTANT_CASE string to camelCase", () => {
    expect(ConstantCaseStringToCamelCaseString("CONSTANT_CASE_STRING")).toBe(
      "constantCaseString"
    );
    expect(
      ConstantCaseStringToCamelCaseString("ANOTHER_CONSTANT_CASE_STRING")
    ).toBe("anotherConstantCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToCamelCaseString("")).toBe("");
  });

  test("returns the same string if input is already in camelCase", () => {
    expect(ConstantCaseStringToCamelCaseString("camelCaseString")).toBe(
      "camelCaseString"
    );
  });
});
