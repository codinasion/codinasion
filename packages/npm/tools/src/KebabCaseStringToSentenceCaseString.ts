export function KebabCaseStringToSentenceCaseString(str: string): string {
  return str.replace(/-/g, " ").replace(/^\w/, (match) => match.toUpperCase());
}
