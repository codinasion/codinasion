export function CamelCaseStringToConstantCaseString(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `_${match}`).toUpperCase();
}
