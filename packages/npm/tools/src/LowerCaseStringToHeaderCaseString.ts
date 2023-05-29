export function LowerCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
