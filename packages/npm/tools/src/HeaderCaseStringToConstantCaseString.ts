export function HeaderCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, "_");
}
