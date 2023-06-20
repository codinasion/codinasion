bool isPangram(String text){
  Set<String> letters = "abcdefghijklmnopqrstuvwxyz".split("").toSet();
  text.toLowerCase().split("").forEach((l) => letters.remove(l));
  return letters.length == 0;
}

void main() {
  print(isPangram("The quick brown fox jumps over the lazy dog"));
}
