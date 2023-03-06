function toSnakeCase(str) {
  // Replace any non-word characters with underscores
  let snakeCase = str.replace(/\W+/g, '_');

  // Convert to lowercase
  snakeCase = snakeCase.toLowerCase();

  // Remove underscores from the beginning and end of the string
  snakeCase = snakeCase.replace(/^_+|_+$/g, '');

  return snakeCase;
}

// Prompt the user to enter a string
const inputString = prompt("Enter a string to convert to snakecase:");

// Convert the string to snakecase
const snakeCaseString = toSnakeCase(inputString);

// Display the snakecase string
console.log(snakeCaseString);
