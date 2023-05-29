import 'dart:io';
void main(){
  print("Enter the side :");
  int side = int.parse(stdin.readLineSync()!);
  int perimeter = 4 * side;
  print('Perimeter of square : $perimeter');
}
