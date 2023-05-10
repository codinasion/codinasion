import 'dart:io';

bool isLeapYear(int year) {
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

void main() {
  print("Enter a year: ");
  int year = int.parse(stdin.readLineSync()!);

  if(isLeapYear(year)){
    print("Leap Year");
  }else{
    print("Not a leap year");
  }
}
