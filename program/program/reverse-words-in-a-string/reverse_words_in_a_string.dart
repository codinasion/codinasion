void main() {
  String input = "Hello World";
  
  // Reverse the words in the string
  String reversedString = reverseWords(input);
  
  // Output the reversed string
  print("Reversed string: $reversedString");
}

String reverseWords(String input) {
  List<String> words = input.split(" ");

  // Reverse the order of words
  List<String> reversedWords = List.from(words.reversed);

  // Construct the reversed string
  String reversedString = reversedWords.join(" ");

  return reversedString;
}
