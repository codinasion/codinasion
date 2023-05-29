export function HeaderCaseStringToTitleCaseString(str: string): string {
  return str
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}
