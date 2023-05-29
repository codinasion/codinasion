export function KebabCaseStringToDotCaseString(str: string): string {
  return str.replace(/-/g, ".");
}
