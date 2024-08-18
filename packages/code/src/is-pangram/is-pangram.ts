export function isPangram(str: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedStr = str.toLowerCase();
  const letterSet = new Set<string>();

  for (const char of normalizedStr) {
    if (alphabet.includes(char)) {
      letterSet.add(char);
    }
  }

  return letterSet.size === 26;
}
