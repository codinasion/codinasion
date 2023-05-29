export function HeaderCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/-/g, "_").replace(/_/g, "-");
}
