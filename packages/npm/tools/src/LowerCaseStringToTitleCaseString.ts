export function LowerCaseStringToTitleCaseString(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
