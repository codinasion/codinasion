export function CamelCaseStringToLowerCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`).trim();
}
