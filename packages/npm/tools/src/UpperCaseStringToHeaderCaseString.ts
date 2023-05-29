export function UpperCaseStringToHeaderCaseString(str: string): string {
  if (str !== str.toUpperCase()) {
    return str;
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
