export function KebabCaseStringToHeaderCaseString(str: string): string {
  const result = str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
  return result.replace(/ /g, "-");
}
