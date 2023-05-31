const vowelCase = (str: string): string => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()),
      ""
    );
};

console.log(vowelCase("hello world"));
