String convertToSentenceCase(String input, List<String> fixedWords) {
  // Converting the input to lowercase
  input = input.toLowerCase();

  // Capitalizing the first character
  if (input.isNotEmpty) {
    input = input[0].toUpperCase() + input.substring(1);
  }
  else {
    return("Empty string");
  }

  // Replacing lower case fixed words with upper case
  for (String fixedWord in fixedWords) {
    String fixedWordLowerCase = fixedWord.toLowerCase();
    if (input.contains(fixedWordLowerCase)) {
      input = input.replaceAll(fixedWordLowerCase, fixedWord);
    }
  }

  // Handling special cases for colon, semicolon, and full stop
  for (int i = 0; i < input.length - 1; i++) {
    if (input[i] == ':' || input[i] == ';' || input[i] == '.') {
      int j = i + 1;
      // Skip any whitespace
      while (j < input.length && input[j] == ' ') {
        j++;
      }
      if (j < input.length) {
        input = input.substring(0, j) + input[j].toUpperCase() + input.substring(j + 1);
      }
    }
  }

  return input;
}

void main() {
  String text1 = "john and jane went to new york to visit the museum of modern art (moma)";
  List<String> fixedWords1 = ["John", "Jane", "New York", "Museum of Modern Art", "MoMA"];
  print(convertToSentenceCase(text1, fixedWords1));

  String text2 = "the united nations (un) is an international organization";
  List<String> fixedWords2 = ["United Nations", "UN"];
  print(convertToSentenceCase(text2, fixedWords2));

  String text3 = "the cat is sleeping; however, the dog is awake";
  List<String> fixedWords3 = [];
  print(convertToSentenceCase(text3, fixedWords3));
}
