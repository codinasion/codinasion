export function SentenceCaseStringToDotCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, ".");
}
