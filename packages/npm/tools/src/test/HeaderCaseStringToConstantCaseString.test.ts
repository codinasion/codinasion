import { HeaderCaseStringToConstantCaseString } from "../HeaderCaseStringToConstantCaseString";

describe("HeaderCaseStringToConstantCaseString", () => {
  test("converts a Header-Case string to CONSTANT_CASE", () => {
    expect(HeaderCaseStringToConstantCaseString("Header-Case-String")).toBe(
      "HEADER_CASE_STRING"
    );
    expect(
      HeaderCaseStringToConstantCaseString("Another-Header-Case-String")
    ).toBe("ANOTHER_HEADER_CASE_STRING");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToConstantCaseString("")).toBe("");
  });

  test("returns the same string if input is already in CONSTANT_CASE", () => {
    expect(HeaderCaseStringToConstantCaseString("CONSTANT_CASE_STRING")).toBe(
      "CONSTANT_CASE_STRING"
    );
  });
});
