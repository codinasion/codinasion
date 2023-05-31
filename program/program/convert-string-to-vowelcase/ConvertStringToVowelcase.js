const vowelCase = (str) => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()),
      ""
    );
};

console.log(vowelCase("hello world"));
