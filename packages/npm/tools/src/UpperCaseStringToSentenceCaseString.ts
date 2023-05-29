export function UpperCaseStringToSentenceCaseString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
