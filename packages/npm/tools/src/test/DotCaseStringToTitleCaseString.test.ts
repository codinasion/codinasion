import { DotCaseStringToTitleCaseString } from "../DotCaseStringToTitleCaseString";

describe("DotCaseStringToTitleCaseString", () => {
  test("converts a dot.case string to Title Case", () => {
    expect(DotCaseStringToTitleCaseString("dot.case.string")).toBe(
      "Dot Case String"
    );
    expect(DotCaseStringToTitleCaseString("another.dot.case.string")).toBe(
      "Another Dot Case String"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(DotCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(DotCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
