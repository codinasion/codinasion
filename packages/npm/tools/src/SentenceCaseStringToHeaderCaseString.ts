export function SentenceCaseStringToHeaderCaseString(str: string): string {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}
