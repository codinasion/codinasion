import 'dart:io';

// Write a Dart program to print numbers from n to 1

// Input  : 5
// Output : 5 4 3 2 1
 
void main() {
  print('Enter Number : ');
  int num = int.parse(stdin.readLineSync()!);
 
  int i = num;

  do { 
      print(num); 
      num--; 
   }
   while(num>0);
 
  
}

// written by Technical Amanjeet
