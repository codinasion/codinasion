export function KebabCaseStringToPascalCaseString(str: string): string {
  return str
    .replace(/-([a-z])/g, (match, group1) => group1.toUpperCase())
    .replace(/^\w/, (match) => match.toUpperCase());
}
