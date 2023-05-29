import { TitleCaseStringToDotCaseString } from "../TitleCaseStringToDotCaseString";

describe("TitleCaseStringToDotCaseString", () => {
  test("converts a TitleCase string to dot.case", () => {
    expect(TitleCaseStringToDotCaseString("Title Case String")).toBe(
      "title.case.string"
    );
    expect(TitleCaseStringToDotCaseString("Another Title Case String")).toBe(
      "another.title.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(TitleCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(TitleCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
