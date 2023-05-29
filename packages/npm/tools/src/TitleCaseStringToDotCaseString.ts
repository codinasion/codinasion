export function TitleCaseStringToDotCaseString(str: string): string {
  return str.replace(/\s+/g, ".").toLowerCase();
}
