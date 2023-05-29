String _consonantCase(String str) => str.replaceAllMapped(
    RegExp(r'[^aeiou]'), (match) => match.group(0).toString().toUpperCase());

void main() {
  print(_consonantCase('hello world'));
}
