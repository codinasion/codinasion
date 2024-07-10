import 'dart:io';

String toVowelCase(String input) {
  List<String> vowels = ['a', 'e', 'i', 'o', 'u'];

  String result = '';
  for (int i = 0; i < input.length; i++) {
    if (vowels.contains(input[i].toLowerCase())) {
      result += input[i].toUpperCase();
    } else {
      result += input[i].toLowerCase();
    }
  }

  return result;
}

void main() {
  // Take user input
  print("Enter a string:");
  String? userInput = stdin.readLineSync();

  if (userInput != null) {
    // Convert to vowel-case and print the result
    String vowelCaseString = toVowelCase(userInput);
    print("Vowel-case: $vowelCaseString");
  }
}
