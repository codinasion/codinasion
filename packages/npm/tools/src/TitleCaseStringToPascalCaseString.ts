export function TitleCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/\s+/g, "")
    .replace(/^(.)/, (match) => match.toUpperCase());
}
