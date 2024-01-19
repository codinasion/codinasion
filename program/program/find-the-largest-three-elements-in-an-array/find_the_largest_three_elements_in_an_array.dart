import 'dart:io';

void main() {
  print("Enter the size of the array:");
  int size = int.parse(stdin.readLineSync()!);

  List<int> arr = [];

  for (int i = 0; i < size; i++) {
    print("Enter element ${i + 1}:");
    int element = int.parse(stdin.readLineSync()!);
    arr.add(element);
  }

  List<int> largestThree = findLargestThreeElements(arr);

  print("The largest three elements in the array are:");
  for (int i = 0; i < largestThree.length; i++) {
     
    print("${i + 1}: ${largestThree[i]}");
    print(" ");
  }
}

List<int> findLargestThreeElements(List<int> arr) {
  arr.sort((a, b) => b.compareTo(a)); // Sort the array in descending order
  List<int> largestThree = [];

  for (int i = 0; i < 3 && i < arr.length; i++) {
    largestThree.add(arr[i]);
  }

  return largestThree;
}
