function isNumDigitTS(dig: string) {
  return /^[0-9]$/.test(dig) ? "Yes, digit" : "No, not a digit";
}
console.log(isNumDigitTS("1"));
console.log(isNumDigitTS("w"));
console.log(isNumDigitTS("6.9"));
