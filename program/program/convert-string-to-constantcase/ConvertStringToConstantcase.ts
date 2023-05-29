const convertStringToConstantCase = (text: string): string => {
  return text.replace(" ", "_").toUpperCase();
};

console.log(convertStringToConstantCase("hello world")); // HELLO_WORLD
