export function SentenceCaseStringToKebabCaseString(str: string): string {
  return str.toLowerCase().replace(/\s+/g, "-");
}
