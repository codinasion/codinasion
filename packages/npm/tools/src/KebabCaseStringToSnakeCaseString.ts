export function KebabCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/-/g, "_");
}
