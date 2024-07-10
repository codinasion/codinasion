import 'dart:io';

double findAverage(List<int> numbers, int index, double sum) {
  // Base case: when index reaches the end of the list
  if (index == numbers.length) {
    // Return the average
    return sum / numbers.length;
  } else {
    // Recursive case: add current number to sum and move to the next index
    return findAverage(numbers, index + 1, sum + numbers[index]);
  }
}

void main() {
  print("Enter the numbers separated by space:");
  String input = stdin.readLineSync()!;
  List<String> numberStrings = input.split(' ');
  
  // Convert input strings to integers
  List<int> numbers = numberStrings.map(int.parse).toList();
  
  // Calculate the average using recursion
  double average = findAverage(numbers, 0, 0);
  
  print("Average of the numbers: $average");
}
