export function TitleCaseStringToConstantCaseString(str: string): string {
  return str.replace(/\s+/g, "_").toUpperCase();
}
