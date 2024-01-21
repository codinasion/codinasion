import 'dart:io';

void selectionSort(List<int> list) {
  int n = list.length;

  for (int i = 0; i < n - 1; i++) {
    int min = i;
    for (int j = i + 1; j < n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    if (min != i) {
      int temp = list[min];
      list[min] = list[i];
      list[i] = temp;
    }
  }
}

void main() {
  print("Enter the integers separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> inputList = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();
  print("Input List: $inputList");
  selectionSort(inputList);
  print("Sorted List: $inputList");
}

/*

Command Prompt Execution:
dart implement_selection_sort.dart
Enter the integers separated by space:
9 4 10 1 5 2
Input List: [9, 4, 10, 1, 5, 2]
Sorted List: [1, 2, 4, 5, 9, 10]

*/
