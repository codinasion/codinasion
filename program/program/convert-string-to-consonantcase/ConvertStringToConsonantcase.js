const consonantCase = (str) => {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (a, c) => a + (/[aeiou]/i.test(c) ? c.toLowerCase() : c.toUpperCase()),
      ""
    );
};

console.log(consonantCase("hello world"));
