export function KebabCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, "_");
}
