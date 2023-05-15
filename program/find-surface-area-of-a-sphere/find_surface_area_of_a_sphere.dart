import 'dart:io';
void main(){
  print("Enter the radius :");
  int radius = int.parse(stdin.readLineSync()!);
  double area = 4.0 * 3.14 * radius * radius;
  print('Surface area of sphere : $area');
}
