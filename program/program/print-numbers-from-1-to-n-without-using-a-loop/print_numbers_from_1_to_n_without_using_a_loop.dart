import 'dart:io';

void printNumbers(int n) {
  if (n > 0) {
    printNumbers(n - 1);
    print(n);
  }
}

void main() {
  stdout.write('Enter a number: ');
  int n = int.parse(stdin.readLineSync()!);
  printNumbers(n);
}