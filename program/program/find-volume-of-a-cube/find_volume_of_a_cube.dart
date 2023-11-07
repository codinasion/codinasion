import 'dart:io';

void main() {
  print("Enter the edge of a cube of which you want to calculate volume: ");
  double? a = double.parse(stdin.readLineSync()!);
  double vol = a*a*a;
  print("Volume of cube is $vol");
}
