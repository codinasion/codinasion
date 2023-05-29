export function PathCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/\//g, ".");
}
