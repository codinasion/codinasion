import 'dart:io';
import 'dart:math';
void main(){
  print("Enter the principal :");
  double principal = double.parse(stdin.readLineSync()!);
  print("Enter the interest :");
  double interest = double.parse(stdin.readLineSync()!);
  print("Enter the time :");
  double time = double.parse(stdin.readLineSync()!);
  double ci = principal *  pow(1 + interest/100, time);
  print('Area of circle : $ci');
}
