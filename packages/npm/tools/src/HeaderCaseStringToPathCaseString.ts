export function HeaderCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "/");
}
