const convertToConsonantcase = (input: string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return input
    .toLowerCase()
    .split("")
    .map((letter: string) =>
      vowels.includes(letter) ? letter : letter.toUpperCase(),
    )
    .join("");
};

console.log(convertToConsonantcase("hello world"));
