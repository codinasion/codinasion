export function TitleCaseStringToPathCaseString(str: string): string {
  return str.replace(/\s+/g, "/").toLowerCase();
}
