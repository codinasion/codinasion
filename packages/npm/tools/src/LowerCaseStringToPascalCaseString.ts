export function LowerCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\b\w/g, (match) => match.toUpperCase())
    .replace(/\s/g, "");
}
