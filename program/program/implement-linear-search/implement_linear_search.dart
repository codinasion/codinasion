import 'dart:io';

int linearSearch(List<int> list, int value) {
  for (int i = 0; i < list.length; i++) {
    if (list[i] == value) {
      return i; // Return the index of the found item
    }
  }
  return -1; // Return -1 if the value is not found in the list
}

void main() {
  print("Enter integers for the list separated by space:");
  String input = stdin.readLineSync() ?? '';
  List<int> list = input.split(' ').map((e) => int.tryParse(e) ?? 0).toList();

  print("Enter the value to search:");
  int value = int.tryParse(stdin.readLineSync() ?? '') ?? 0;

  int result = linearSearch(list, value);

  if (result != -1) {
    print("Value $value found at index $result.");
  } else {
    print("Value $value not found in the list.");
  }
}
