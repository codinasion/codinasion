function toTitleCase(str: string): string {
  const strArr = str.split(' ');
  return strArr.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(toTitleCase('hello world'));
