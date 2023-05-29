export function KebabCaseStringToPathCaseString(str: string): string {
  return str.replace(/-/g, "/");
}
