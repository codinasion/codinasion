export function SentenceCaseStringToPathCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "/");
}
