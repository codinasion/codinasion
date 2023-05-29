export function KebabCaseStringToLowerCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, " ");
}
