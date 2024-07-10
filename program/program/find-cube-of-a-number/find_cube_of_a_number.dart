import 'dart:io';

void main() {
  print("Enter a number of which you want to calculate cube: ");
  double? n = double.parse(stdin.readLineSync()!);
  double cube = n*n*n;
  print("Cube of $n is $cube");
}
