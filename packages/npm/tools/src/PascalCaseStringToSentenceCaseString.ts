export function PascalCaseStringToSentenceCaseString(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}
