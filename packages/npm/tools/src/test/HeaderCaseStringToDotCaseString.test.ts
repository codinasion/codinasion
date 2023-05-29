import { HeaderCaseStringToDotCaseString } from "../HeaderCaseStringToDotCaseString";

describe("HeaderCaseStringToDotCaseString", () => {
  test("converts a Header-Case string to dot.case", () => {
    expect(HeaderCaseStringToDotCaseString("Header-Case-String")).toBe(
      "header.case.string"
    );
    expect(HeaderCaseStringToDotCaseString("Another-Header-Case-String")).toBe(
      "another.header.case.string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToDotCaseString("")).toBe("");
  });

  test("returns the same string if input is already in dot.case", () => {
    expect(HeaderCaseStringToDotCaseString("dot.case.string")).toBe(
      "dot.case.string"
    );
  });
});
