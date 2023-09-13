import 'dart:io';

int calculatePowerRec(int base, int exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * calculatePowerRec(base, exponent - 1);
  }
}

void main() {
  stdout.write("Enter the base: ");
  int base = int.parse(stdin.readLineSync()!);

  stdout.write("Enter the exponent: ");
  int exponent = int.parse(stdin.readLineSync()!);

  int result = calculatePowerRec(base, exponent);
  print(result);
}
