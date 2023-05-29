export function TitleCaseStringToHeaderCaseString(str: string): string {
  return str
    .replace(/ /g, "-")
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}
