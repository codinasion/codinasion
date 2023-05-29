export function SentenceCaseStringToConstantCaseString(str: string): string {
  return str.toUpperCase().replace(/\s+/g, "_");
}
