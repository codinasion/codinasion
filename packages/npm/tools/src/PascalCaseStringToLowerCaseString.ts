export function PascalCaseStringToLowerCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => ` ${match.toLowerCase()}`)
    .trim()
    .toLowerCase();
}
