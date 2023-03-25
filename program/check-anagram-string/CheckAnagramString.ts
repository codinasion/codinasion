function isAnagram(str1: string, str2: string): boolean {
    // Remove any whitespace and convert to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Check if the strings have the same length
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create objects to count the number of occurrences of each letter
    const counts1 = {};
    const counts2 = {};
  
    // Count the occurrences of each letter in the first string
    for (const char of str1) {
      counts1[char] = (counts1[char] || 0) + 1;
    }
  
    // Count the occurrences of each letter in the second string
    for (const char of str2) {
      counts2[char] = (counts2[char] || 0) + 1;
    }
  
    // Compare the counts of each letter
    for (const char in counts1) {
      if (counts1[char] !== counts2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Read user input for the two strings
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('Enter the first string: ', (str1) => {
    readline.question('Enter the second string: ', (str2) => {
      // Check if the strings are anagrams of each other
      if (isAnagram(str1, str2)) {
        console.log(`${str1} and ${str2} are anagrams of each other.`);
      } else {
        console.log(`${str1} and ${str2} are not anagrams of each other.`);
      }
  
      // Close the readline interface
      readline.close();
    });
  });
  
