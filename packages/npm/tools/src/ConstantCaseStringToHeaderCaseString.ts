export function ConstantCaseStringToHeaderCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
