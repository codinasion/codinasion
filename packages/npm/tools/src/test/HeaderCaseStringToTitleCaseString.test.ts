import { HeaderCaseStringToTitleCaseString } from "../HeaderCaseStringToTitleCaseString";

describe("HeaderCaseStringToTitleCaseString", () => {
  test("converts a Header-Case string to Title Case", () => {
    expect(HeaderCaseStringToTitleCaseString("Header-Case-String")).toBe(
      "Header Case String"
    );
    expect(
      HeaderCaseStringToTitleCaseString("Another-Header-Case-String")
    ).toBe("Another Header Case String");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToTitleCaseString("")).toBe("");
  });

  test("returns the same string if input is already in Title Case", () => {
    expect(HeaderCaseStringToTitleCaseString("Title Case String")).toBe(
      "Title Case String"
    );
  });
});
