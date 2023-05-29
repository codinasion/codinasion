export function HeaderCaseStringToSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "_");
}
