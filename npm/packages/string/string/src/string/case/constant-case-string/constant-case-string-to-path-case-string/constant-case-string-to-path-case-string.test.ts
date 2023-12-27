import { ConstantCaseStringToPathCaseString } from "./constant-case-string-to-path-case-string";

describe("ConstantCaseStringToPathCaseString", () => {
  test("converts a CONSTANT_CASE string to path/case", () => {
    expect(ConstantCaseStringToPathCaseString("CONSTANT_CASE_STRING")).toBe(
      "constant/case/string",
    );
    expect(
      ConstantCaseStringToPathCaseString("ANOTHER_CONSTANT_CASE_STRING"),
    ).toBe("another/constant/case/string");
  });

  test("returns an empty string if input is empty", () => {
    expect(ConstantCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(ConstantCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string",
    );
  });
});
