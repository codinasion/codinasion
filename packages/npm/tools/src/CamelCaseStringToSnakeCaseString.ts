export function CamelCaseStringToSnakeCaseString(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}
