export function KebabCaseStringToTitleCaseString(str: string): string {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
