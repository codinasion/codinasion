export function areAnagrams(str1: string, str2: string): boolean {
  // Helper function to normalize and sort a string
  const normalizeAndSort = (str: string): string => {
    return str
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  };

  // Normalize and sort both strings
  const normalizedStr1 = normalizeAndSort(str1);
  const normalizedStr2 = normalizeAndSort(str2);

  // Compare the normalized and sorted strings
  return normalizedStr1 === normalizedStr2;
}

