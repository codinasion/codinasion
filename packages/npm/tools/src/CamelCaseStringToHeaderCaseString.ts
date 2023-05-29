export function CamelCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}
