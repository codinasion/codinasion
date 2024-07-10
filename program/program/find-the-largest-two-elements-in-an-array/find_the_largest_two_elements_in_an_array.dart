import 'dart:io';

void findLargestTwo(List<int> arr) {
  if (arr.length < 2) {
    print("Array should have at least two elements.");
    return;
  }

  int largest = (arr[0] > arr[1]) ? arr[0] : arr[1];
  int secondLargest = (arr[0] > arr[1]) ? arr[1] : arr[0];

  for (int i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  print("Largest two elements in the array: $largest $secondLargest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findLargestTwo(array);
}


/*

Command Prompt Execution:
dart find_the_largest_two_elements_in_an_array.dart
Enter integers for the array separated by space:
10 11 9 1 20 3
Largest two elements in the array: 20 11

*/
