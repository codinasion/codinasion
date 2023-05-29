import 'dart:io';
void main(){
  print("Enter the length :");
  int length = int.parse(stdin.readLineSync()!);
  print("Enter the width :");
  int width = int.parse(stdin.readLineSync()!);
  print("Enter the height :");
  int height = int.parse(stdin.readLineSync()!);
  int cuboid = 2 * (length * width + length * height + width * height);
  print('Area of cuboid : $cuboid');
}
