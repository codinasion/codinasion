export function TitleCaseStringToKebabCaseString(str: string): string {
  return str.replace(/\s+/g, "-").toLowerCase();
}
