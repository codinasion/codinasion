import 'dart:io';

void main() {
  //Asks user to enter a string
  stdout.write('Enter a string: ');
  //Reads users input
  String input = stdin.readLineSync()!;
  //Calls function to convert input to reverse case
  String reverseCaseString = reverseCase(input);
  //Prints reversed case string
  print(reverseCaseString);
}

String reverseCase(String str) {
  String reversed = '';
  //Iterates through each character of input string
  for (int i = 0; i < str.length; i++) {
    String char = str[i];
    //Checks if character is uppercase
    if (char == char.toUpperCase()) {
      //Converts uppercase character to lowercase and adds it to reversed string
      reversed += char.toLowerCase();
    } else {
      //Converts lowercase character to uppercase and adds it to reversed string
      reversed += char.toUpperCase();
    }
  }
  //Returns reversed case string
  return reversed;
}
