import 'dart:io';

void main(List<String> args) {
  print('Enter string:');
  String? input = stdin.readLineSync()!;
  print(input.length);
}
