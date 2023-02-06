function isNumDigit(dig) {
  return /^[0-9]$/.test(dig) ? "Yes, digit" : "No, not a digit";
}
console.log(isNumDigit("1"));
console.log(isNumDigit("w"));
console.log(isNumDigit("6.9"));
