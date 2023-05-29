export function HeaderCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, " ");
}
