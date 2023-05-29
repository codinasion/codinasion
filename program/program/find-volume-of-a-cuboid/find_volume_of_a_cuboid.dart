import 'dart:io';
void main(){
  print("Enter the length :");
  int length = int.parse(stdin.readLineSync()!);
  print("Enter the width :");
  int width = int.parse(stdin.readLineSync()!);
  print("Enter the height :");
  int height = int.parse(stdin.readLineSync()!);
  int cuboid = length * width * height;
  print('Volume of a cuboid : $cuboid');
}
