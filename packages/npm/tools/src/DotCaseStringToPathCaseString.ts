export function DotCaseStringToPathCaseString(str: string): string {
  return str.replace(/\./g, "/");
}
