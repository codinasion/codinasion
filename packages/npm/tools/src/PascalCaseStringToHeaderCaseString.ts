export function PascalCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join("-")
    .replace(/--/g, "-");
}
