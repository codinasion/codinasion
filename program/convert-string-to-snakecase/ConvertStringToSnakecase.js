const convertStringToSnakeCase = (string) => {
  const splitted = string.split(" ");
  let snakeCased = "";
  splitted.forEach((word) => {
    word !== splitted[splitted.length - 1]
      ? (snakeCased += word.toLowerCase() + "_")
      : (snakeCased += word.toLowerCase());
  });
  return snakeCased;
};

console.log(convertStringToSnakeCase("HeLlO World"));
