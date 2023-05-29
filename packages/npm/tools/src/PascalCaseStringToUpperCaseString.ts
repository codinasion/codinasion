export function PascalCaseStringToUpperCaseString(str: string): string {
  return str === str.toUpperCase()
    ? str
    : str
        .replace(/([A-Z])/g, " $1")
        .toUpperCase()
        .trim();
}
