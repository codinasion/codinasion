import { HeaderCaseStringToPathCaseString } from "../HeaderCaseStringToPathCaseString";

describe("HeaderCaseStringToPathCaseString", () => {
  test("converts a Header-Case string to path/case", () => {
    expect(HeaderCaseStringToPathCaseString("Header-Case-String")).toBe(
      "header/case/string"
    );
    expect(HeaderCaseStringToPathCaseString("Another-Header-Case-String")).toBe(
      "another/header/case/string"
    );
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToPathCaseString("")).toBe("");
  });

  test("returns the same string if input is already in path/case", () => {
    expect(HeaderCaseStringToPathCaseString("path/case/string")).toBe(
      "path/case/string"
    );
  });
});
