export function HeaderCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, ".");
}
