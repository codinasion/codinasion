import 'dart:io';

void findSmallestTwo(List<int> arr) {
  if (arr.length < 2) {
    print("Array should have at least two elements.");
    return;
  }

  int smallest = (arr[0] < arr[1]) ? arr[0] : arr[1];
  int secondSmallest = (arr[0] < arr[1]) ? arr[1] : arr[0];

  for (int i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }

  print("Smallest two elements in the array: $smallest $secondSmallest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findSmallestTwo(array);
}


/*

Command Prompt Execution:
dart find_the_smallest_two_elements_in_an_array.dart
Enter integers for the array separated by space:
10 11 9 1 20 3
Smallest two elements in the array: 1 3

*/
