export function KebabCaseStringToUpperCaseString(str: string): string {
  return str.toUpperCase().replace(/-/g, " ");
}
