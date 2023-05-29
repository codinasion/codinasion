import 'dart:io';

void main() {
  print('Enter a string:');
  String? input = stdin.readLineSync();
  List<String>? words = input?.split(' ');
  print(words);
}
