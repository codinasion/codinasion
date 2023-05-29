export function TitleCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toLowerCase();
}
