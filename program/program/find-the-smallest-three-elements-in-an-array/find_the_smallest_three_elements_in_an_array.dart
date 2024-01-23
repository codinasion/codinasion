import 'dart:io';

void findSmallestThree(List<int> arr) {
  if (arr.length < 3) {
    print("Array should have at least three elements.");
    return;
  }

  int firstSmallest = double.maxFinite.toInt();
  int secondSmallest = double.maxFinite.toInt();
  int thirdSmallest = double.maxFinite.toInt();

  for (int i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      thirdSmallest = secondSmallest;
      secondSmallest = arr[i];
    } else if (arr[i] < thirdSmallest) {
      thirdSmallest = arr[i];
    }
  }

  print("Smallest three elements in the array: $firstSmallest $secondSmallest $thirdSmallest");
}

void main() {
  print("Enter integers for the array separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> array = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  findSmallestThree(array);
}


/*

Command Prompt Execution:
dart find_the_smallest_three_elements_in_an_array.dart
Enter integers for the array separated by space:
10 9 8 7 6 55 44 33 22 11 101
Smallest three elements in the array: 6 7 8

*/