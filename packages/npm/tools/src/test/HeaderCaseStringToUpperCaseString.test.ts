import { HeaderCaseStringToUpperCaseString } from "../HeaderCaseStringToUpperCaseString";

describe("HeaderCaseStringToUpperCaseString", () => {
  test("converts a Header-Case string to UPPERCASE", () => {
    expect(HeaderCaseStringToUpperCaseString("Header-Case-String")).toBe(
      "HEADER CASE STRING"
    );
    expect(
      HeaderCaseStringToUpperCaseString("Another-Header-Case-String")
    ).toBe("ANOTHER HEADER CASE STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToUpperCaseString("")).toBe("");
  });

  test("returns the same string if input is already in UPPERCASE", () => {
    expect(HeaderCaseStringToUpperCaseString("UPPERCASE STRING")).toBe(
      "UPPERCASE STRING"
    );
  });
});
