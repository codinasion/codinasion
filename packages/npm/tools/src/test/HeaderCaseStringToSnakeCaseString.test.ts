import { HeaderCaseStringToSnakeCaseString } from "../HeaderCaseStringToSnakeCaseString";

describe("HeaderCaseStringToSnakeCaseString", () => {
  test("converts a Header-Case string to snake_case", () => {
    expect(HeaderCaseStringToSnakeCaseString("Header-Case-String")).toBe(
      "header_case_string"
    );
    expect(
      HeaderCaseStringToSnakeCaseString("Another-Header-Case-String")
    ).toBe("another_header_case_string");
  });

  test("returns an empty string if input is empty", () => {
    expect(HeaderCaseStringToSnakeCaseString("")).toBe("");
  });

  test("returns the same string if input is already in snake_case", () => {
    expect(HeaderCaseStringToSnakeCaseString("snake_case_string")).toBe(
      "snake_case_string"
    );
  });
});
