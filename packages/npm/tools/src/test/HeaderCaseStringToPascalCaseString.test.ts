import { HeaderCaseStringToPascalCaseString } from "../HeaderCaseStringToPascalCaseString";

describe("HeaderCaseStringToPascalCaseString", () => {
  test("converts a Header-Case string to PascalCase", () => {
    expect(HeaderCaseStringToPascalCaseString("Header-Case-String")).toBe(
      "HeaderCaseString"
    );
    expect(
      HeaderCaseStringToPascalCaseString("Another-Header-Case-String")
    ).toBe("AnotherHeaderCaseString");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToPascalCaseString("")).toBe("");
  });

  test("returns the same string if input is already in PascalCase", () => {
    expect(HeaderCaseStringToPascalCaseString("PascalCaseString")).toBe(
      "PascalCaseString"
    );
  });
});
